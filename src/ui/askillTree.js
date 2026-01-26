export function initAskillTree(deps) {
    const {
        // state / 副作用
        getState,                    // () => state
        save,                        // () => void
        recomputeAllSkillEffects,    // () => void

        // ゲーム計算・テキスト
        getZdMultFromUnspentAp,      // () => number
        getASkillLabel,              // (id) => string
        getASkillDesc,                        // (id) => string

        // 定数
        ASKILL_POS,
        ASKILL_EDGES,
        ASKILL_COSTS,
        ASKILL_PREREQ,

        // DOM id（必要なら変更可能）
        ids = {
            stage: "askill-stage",
            canvas: "askill-canvas",
            wires: "askill-wires",
            apAmount: "apAmount",
        },
    } = deps;

    // ----------------------------
    // 内部ユーティリティ
    // ----------------------------
    function state() { return getState(); }

    function isOwned(id) {
        const o = state()?.skills?.anko?.owned;
        return !!(o && typeof o === "object" && o[id]);
    }

    function meetsPrereq(id) {
        const reqs = ASKILL_PREREQ?.[id] ?? [];
        if (reqs.length === 0) return true;
        return reqs.some((r) => isOwned(r)); // OR条件
    }

    function canBuy(id) {
        const ap = state()?.ap || 0;
        const cost = ASKILL_COSTS?.[id] || 0;
        return !isOwned(id) && meetsPrereq(id) && ap >= cost;
    }

    // ----------------------------
    // 状態表示更新
    // ----------------------------
    function updateAskillStates() {
        const ap = state()?.ap || 0;
        document
            .querySelectorAll(`#${ids.stage} .askill-canvas .askill-node`)
            .forEach((n) => {
                const id = n.dataset.skill;
                const cost = ASKILL_COSTS?.[id] || 0;

                const owned = isOwned(id);
                const prereq = meetsPrereq(id);
                const can = !owned && prereq && ap >= cost;

                n.classList.toggle("bought", owned);
                n.classList.toggle("ready", can);
                n.classList.toggle("locked", !owned && !can);

                const badgeVal = n.querySelector(".ap-val");
                if (badgeVal) {
                    badgeVal.textContent = owned ? "✓" : String(cost);
                }
            });
    }

    function updateAskillDescriptions() {
        const el = document.getElementById("desc-s3_1");
        if (!el) return;

        const m = getZdMultFromUnspentAp();
        el.textContent =
            `未使用のAPに応じて全てのずんだディメンションの効率が強化される。(現在x${m.toFixed(2)})`;
    }

    // costをバッジに書き込む専用
    function refreshSkillCostBadges() {
        document
            .querySelectorAll(`#${ids.stage} .askill-canvas .ap-val`)
            .forEach((el) => {
                const id = el.dataset.ap;
                const cost = (ASKILL_COSTS?.[id] ?? 0);
                el.textContent = String(cost);
            });
    }

    // ----------------------------
    // 購入処理（クリック）
    // ----------------------------
    function handleSkillClick(e) {
        const n = e.currentTarget;
        const id = n.dataset.skill;
        if (isOwned(id)) return;

        const s = state();
        const cost = ASKILL_COSTS?.[id] || 0;

        if (!meetsPrereq(id)) return;
        if ((s.ap || 0) < cost) return;

        s.ap -= cost;
        (s.skills ??= {});
        (s.skills.anko ??= {});
        (s.skills.anko.owned ??= {});
        s.skills.anko.owned[id] = true;

        const apEl = document.getElementById(ids.apAmount);
        if (apEl) apEl.textContent = String(s.ap);

        save();
        recomputeAllSkillEffects();
        updateAskillStates();
    }

    function initSkillPurchase() {
        // 既存のイベントを剥がすため clone で置換（元コード踏襲）
        document
            .querySelectorAll(`#${ids.stage} .askill-canvas .askill-node`)
            .forEach((n) => {
                const nn = n.cloneNode(true);
                n.replaceWith(nn);
            });

        document
            .querySelectorAll(`#${ids.stage} .askill-canvas .askill-node`)
            .forEach((n) => n.addEventListener("click", handleSkillClick));

        updateAskillStates();
    }

    // ----------------------------
    // DOM構築：ノード生成
    // ----------------------------
    function buildNodes() {
        const stage = document.getElementById(ids.canvas);
        if (!stage) return;

        stage.querySelectorAll(".askill-node").forEach((n) => n.remove());

        for (const [id, p] of Object.entries(ASKILL_POS)) {
            const n = document.createElement("div");
            n.className = "askill-node";
            if (id === "s1" || id === "s11_1") n.classList.add("big-node");

            n.dataset.skill = id;
            n.style.left = p.x + "%";
            n.style.top = p.y + "%";

            n.innerHTML =
                `<div class="ttl">${getASkillLabel(id)}</div>
<div class="desc" id="desc-${id}">${getASkillDesc(id)}</div>
<div class="ap-badge">
  <span class="ap-label">AP</span>
  <span class="ap-val" data-ap="${id}">0</span>
</div>`;

            stage.appendChild(n);
        }

        initSkillPurchase();
        refreshSkillCostBadges();
        updateAskillDescriptions();
        updateAskillStates();
    }

    // ----------------------------
    // SVG配線：線を描く
    // ----------------------------
    function drawWires() {
        const stage = document.getElementById(ids.stage);
        const wires = document.getElementById(ids.wires);
        if (!stage || !wires) return;

        const W = stage.clientWidth || 1;
        const H = stage.clientHeight || 1;

        wires.setAttribute("width", String(W));
        wires.setAttribute("height", String(H));
        wires.innerHTML = "";

        const toPX = (id) => ({
            x: (ASKILL_POS[id].x / 100) * W,
            y: (ASKILL_POS[id].y / 100) * H,
        });

        for (const [a, b] of ASKILL_EDGES) {
            const A = toPX(a), B = toPX(b);
            const midY = (A.y + B.y) / 2;

            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", `M ${A.x},${A.y} C ${A.x},${midY} ${B.x},${midY} ${B.x},${B.y}`);
            path.setAttribute("class", "askill-wire");
            wires.appendChild(path);

            const tri = document.createElementNS("http://www.w3.org/2000/svg", "path");
            const aSz = 6;
            tri.setAttribute("d", `M ${B.x},${B.y - 1} l ${-aSz / 2},${-aSz} l ${aSz},0 Z`);
            tri.setAttribute("class", "askill-wire arrow");
            wires.appendChild(tri);
        }
    }

    // ----------------------------
    // 初期化：表示可能になるまで待つ
    // ----------------------------
    function initWhenReady() {
        const stage = document.getElementById(ids.stage);
        if (!stage) return;

        const ready = stage.offsetParent !== null && stage.clientWidth > 0;
        if (ready) {
            buildNodes();
            drawWires();
            // 念のため更新
            updateAskillStates();
        } else {
            requestAnimationFrame(initWhenReady);
        }
    }

    function onResize() {
        requestAnimationFrame(drawWires);
    }

    function init() {
        initWhenReady();
        window.addEventListener("resize", onResize);
    }

    function dispose() {
        window.removeEventListener("resize", onResize);
    }

    // 外部に出すAPI
    return {
        init,
        dispose,
        buildNodes,
        drawWires,
        initSkillPurchase,
        updateAskillStates,
        updateAskillDescriptions,
    };
}