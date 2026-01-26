export function initAutomationUI(deps) {
    const {
        getState,                   // () => state
        el,                         // (id) => HTMLElement | null
        fmt,                        // (x) => string
        AUTO_THRESH_BY_ZUNDA,
        maybeBuildAscAutomationCard, // (rootMain?) => void  ※今の実装に合わせる
        toggleAllAutomation,         // (on:boolean) => void
        save,                        // () => void
    } = deps;

    let dirty = true;

    function markDirty() { dirty = true; }
    function refreshIfDirty() { if (dirty) refreshAutomationUI(); }

    // ----------------------------
    // DOM構築＋イベント配線
    // ----------------------------
    function buildAutomationUI() {
        const rootMain = el("autoRows");
        const rootEdaSoy = el("autoList-edaSoy");
        if (!rootMain || !rootEdaSoy) return;

        // 行だけ消す（ヘッダーは別要素）
        rootMain.textContent = "";
        rootEdaSoy.textContent = "";

        const state = getState();
        // 念のため初期化（null事故防止）
        state.auto ??= { unlocked: {}, enabled: { zd: [], zdFast: [] } };
        state.auto.enabled.zd ??= Array(8).fill(false);
        state.auto.enabled.zdFast ??= Array(8).fill(false);

        // ---- ZD1〜8 ----
        for (let i = 1; i <= 8; i++) {
            const row = document.createElement("div");
            row.className = "auto-row";
            row.innerHTML = `
        <div class="name">ZundaDimension${i}</div>
        <span class="pill" id="autoLock-zd${i}">未解禁</span>
        <div class="right">
          <label style="display:flex;align-items:center;gap:6px;">
            <input type="checkbox" id="autoToggle-zd${i}">
            <span id="autoText-zd${i}">自動購入(低速)</span>
          </label>
        </div>`;
            rootMain.appendChild(row);

            row.querySelector(`#autoToggle-zd${i}`)?.addEventListener("change", (e) => {
                const s = getState();
                const on = !!e.target.checked;
                s.auto.enabled.zdFast[i - 1] = on;
                s.auto.enabled.zd[i - 1] = on;
                markDirty();
                save?.();
            });
        }

        // ---- ブースト ----
        const rowB = document.createElement("div");
        rowB.className = "auto-row";
        rowB.innerHTML = `
      <div class="name">ずんだブースト</div>
      <span class="pill" id="autoLock-boost">未解禁</span>
      <div class="right">
        <label style="display:flex;align-items:center;gap:6px;">
          <input type="checkbox" id="autoToggle-boost">
          <span id="autoText-boost">自動購入(低速)</span>
        </label>
      </div>`;
        rootMain.appendChild(rowB);

        rowB.querySelector("#autoToggle-boost")?.addEventListener("change", (e) => {
            const s = getState();
            const on = !!e.target.checked;
            const fastUnlocked = !!s.auto?.unlocked?.boostFast;

            if (fastUnlocked) s.auto.enabled.boostFast = on;
            else s.auto.enabled.boost = on;

            markDirty();
            save?.();
        });

        // ---- アセンション＆プレステージ（ブーストのすぐ下） ----
        // 既存関数が rootMain を受け取る想定なのでそのまま
        maybeBuildAscAutomationCard?.(rootMain);

        // ---- 一括トグルボタン ----
        const btnAllOff = document.getElementById("autoAllOff");
        const btnAllOn = document.getElementById("autoAllOn");
        if (btnAllOff) btnAllOff.onclick = () => { toggleAllAutomation?.(false); markDirty(); save?.(); };
        if (btnAllOn) btnAllOn.onclick = () => { toggleAllAutomation?.(true); markDirty(); save?.(); };

        // ---- 枝豆アップグレード ----
        const rowE = document.createElement("div");
        rowE.className = "auto-row";
        rowE.innerHTML = `
      <div class="name">枝豆アップグレード</div>
      <span class="pill" id="autoLock-eda">未解禁</span>
      <div class="right" style="display:flex;flex-direction:column;gap:4px;align-items:flex-start;">
        <label style="display:flex;align-items:center;gap:6px;">
          <input type="checkbox" id="autoToggle-eda-boost">
          <span>ブースト購入</span>
        </label>
        <label style="display:flex;align-items:center;gap:6px;">
          <input type="checkbox" id="autoToggle-eda-exp">
          <span>指数強化</span>
        </label>
      </div>`;
        rootEdaSoy.appendChild(rowE);

        rowE.querySelector("#autoToggle-eda-boost")?.addEventListener("change", (e) => {
            const s = getState();
            const on = !!e.target.checked;
            s.auto.enabled.eda ??= { boost: false, exp: false };
            s.auto.enabled.eda.boost = on;
            markDirty();
            save?.();
        });
        rowE.querySelector("#autoToggle-eda-exp")?.addEventListener("change", (e) => {
            const s = getState();
            const on = !!e.target.checked;
            s.auto.enabled.eda ??= { boost: false, exp: false };
            s.auto.enabled.eda.exp = on;
            markDirty();
            save?.();
        });

        // ---- 大豆アップグレード ----
        const rowS = document.createElement("div");
        rowS.className = "auto-row";
        rowS.innerHTML = `
      <div class="name">大豆アップグレード</div>
      <span class="pill" id="autoLock-soy">未解禁</span>
      <div class="right" style="display:flex;flex-direction:column;gap:4px;align-items:flex-start;">
        <label style="display:flex;align-items:center;gap:6px;">
          <input type="checkbox" id="autoToggle-soy-boostUp">
          <span>ブースト強化</span>
        </label>
        <label style="display:flex;align-items:center;gap:6px;">
          <input type="checkbox" id="autoToggle-soy-zd8">
          <span>ZD8強化</span>
        </label>
      </div>`;
        rootEdaSoy.appendChild(rowS);

        rowS.querySelector("#autoToggle-soy-boostUp")?.addEventListener("change", (e) => {
            const s = getState();
            const on = !!e.target.checked;
            s.auto.enabled.soy ??= { boostUp: false, zd8: false };
            s.auto.enabled.soy.boostUp = on;
            markDirty();
            save?.();
        });
        rowS.querySelector("#autoToggle-soy-zd8")?.addEventListener("change", (e) => {
            const s = getState();
            const on = !!e.target.checked;
            s.auto.enabled.soy ??= { boostUp: false, zd8: false };
            s.auto.enabled.soy.zd8 = on;
            markDirty();
            save?.();
        });

        // 初回は必ず反映
        dirty = true;
        refreshIfDirty();
    }

    // ----------------------------
    // 表示更新（旧 refreshAutomationUI）
    // ----------------------------
    function refreshAutomationUI() {
        const state = getState();

        // ずんだディメンション
        for (let i = 1; i <= 8; i++) {
            const lockEl = el(`autoLock-zd${i}`);
            const unlocked = state.auto.unlocked.zd[i - 1];

            if (lockEl) {
                lockEl.textContent = unlocked
                    ? "アンロック済"
                    : `未解禁（必要: ${fmt(AUTO_THRESH_BY_ZUNDA.zd[i - 1])}）`;
                lockEl.style.color = unlocked ? "var(--accent)" : "var(--muted)";
            }

            const fastUnlocked = state.auto?.unlocked?.zdFast?.[i - 1] === true;
            const chk = el(`autoToggle-zd${i}`);
            if (chk) {
                chk.disabled = !unlocked;
                chk.checked = fastUnlocked
                    ? !!state.auto.enabled.zdFast[i - 1]
                    : !!state.auto.enabled.zd[i - 1];
            }

            const textEl = el(`autoText-zd${i}`);
            if (textEl) textEl.textContent = fastUnlocked ? "自動購入" : "自動購入(低速)";
        }

        // ブースト
        const lB = el("autoLock-boost");
        const uB = state.auto.unlocked.boost;
        if (lB) {
            lB.textContent = uB ? "アンロック済" : `未解禁（必要: ${fmt(AUTO_THRESH_BY_ZUNDA.boost)}）`;
            lB.style.color = uB ? "var(--accent)" : "var(--muted)";
        }
        const cB = el("autoToggle-boost");
        if (cB) { cB.disabled = !uB; cB.checked = !!state.auto.enabled.boost; }

        const fastBoost = state.auto?.unlocked?.boostFast === true;
        const tB = el("autoText-boost");
        if (tB) tB.textContent = fastBoost ? "自動購入" : "自動購入(低速)";

        // アセンション（存在する時だけ）
        const ascUnlocked = !!state.auto?.unlocked?.asc;
        const ascLock = el("autoLock-asc");
        if (ascLock) {
            ascLock.textContent = ascUnlocked ? "アンロック済" : "未解禁";
            ascLock.style.color = ascUnlocked ? "var(--accent)" : "var(--muted)";
        }
        const ascCard = document.getElementById("autoCard-asc");
        if (ascCard) {
            const tgl = ascCard.querySelector("#autoToggle-asc");
            const inp = ascCard.querySelector("#autoAscMul");
            if (tgl) { tgl.checked = !!state.auto?.enabled?.asc; tgl.disabled = false; }
            if (inp) {
                if (document.activeElement !== inp) inp.value = state.auto.ascMul ?? "";
                inp.disabled = false;
            }
        }

        // プレステージ（存在する時だけ）
        const prestUnlocked = !!state.auto?.unlocked?.prest;
        const prestTypes = [
            { key: "speed", cardId: "autoCard-prest-speed", toggleSel: "#autoToggle-prest-speed", inputSel: "#autoPrestMul-speed" },
            { key: "power", cardId: "autoCard-prest-power", toggleSel: "#autoToggle-prest-power", inputSel: "#autoPrestMul-power" },
            { key: "cost", cardId: "autoCard-prest-cost", toggleSel: "#autoToggle-prest-cost", inputSel: "#autoPrestMul-cost" },
        ];

        const prestEnabled = state.auto?.enabled?.prest || {};
        const prestMul = state.auto?.prestMul || {};

        prestTypes.forEach((info) => {
            const card = document.getElementById(info.cardId);
            if (!card) return;
            const tgl = card.querySelector(info.toggleSel);
            const inp = card.querySelector(info.inputSel);

            if (tgl) { tgl.checked = !!prestEnabled[info.key]; tgl.disabled = !prestUnlocked; }
            if (inp) {
                if (document.activeElement !== inp) inp.value = prestMul[info.key] ?? "";
                inp.disabled = !prestUnlocked;
            }
        });

        // 枝豆アップグレード
        {
            const unlocked = !!state.auto?.unlocked?.eda;
            const lockEl = el("autoLock-eda");
            if (lockEl) {
                lockEl.textContent = unlocked ? "アンロック済" : "未解禁";
                lockEl.style.color = unlocked ? "var(--accent)" : "var(--muted)";
            }

            const e = state.auto.enabled.eda || { boost: false, exp: false };
            const tBoost = el("autoToggle-eda-boost");
            const tExp = el("autoToggle-eda-exp");
            if (tBoost) { tBoost.disabled = !unlocked; tBoost.checked = unlocked && !!e.boost; }
            if (tExp) { tExp.disabled = !unlocked; tExp.checked = unlocked && !!e.exp; }
        }

        // 大豆アップグレード
        {
            const unlocked = !!state.auto?.unlocked?.soy;
            const lockEl = el("autoLock-soy");
            if (lockEl) {
                lockEl.textContent = unlocked ? "アンロック済" : "未解禁";
                lockEl.style.color = unlocked ? "var(--accent)" : "var(--muted)";
            }

            const s = state.auto.enabled.soy || { boostUp: false, zd8: false };
            const tBoostUp = el("autoToggle-soy-boostUp");
            const tZd8 = el("autoToggle-soy-zd8");
            if (tBoostUp) { tBoostUp.disabled = !unlocked; tBoostUp.checked = unlocked && !!s.boostUp; }
            if (tZd8) { tZd8.disabled = !unlocked; tZd8.checked = unlocked && !!s.zd8; }
        }

        // 枝豆 / 大豆 自動化カードの表示制御
        {
            const card = el("autoCard-edaSoy");
            if (card) {
                const show = !!state.auto?.unlocked?.eda || !!state.auto?.unlocked?.soy;
                card.style.display = show ? "" : "none";
            }
        }

        dirty = false;
    }

    return {
        buildAutomationUI,
        refreshAutomationUI,
        refreshIfDirty,
        markDirty,
    };
}