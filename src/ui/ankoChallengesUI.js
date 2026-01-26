export function initAnkoChallengeUI(deps) {
    const {
        getState,
        ACHAL_DEFS,
    } = deps;

    let { startAnkoChallenge } = deps; // 後から setStartHandler で差し替える想定

    function setStartHandler(fn) { startAnkoChallenge = fn; }

    function state() { return getState(); }
    function gridEl() { return document.getElementById("ankoChalGrid"); }

    function buildAnkoChallenges() {
        const grid = gridEl();
        if (!grid) return;

        grid.innerHTML = "";

        const count = 13;

        for (let i = 1; i <= count; i++) {
            const def = ACHAL_DEFS?.[i] || { title: `Challenge ${i}`, desc: "説明未設定", reward: "—" };
            const st = (state().anko?.challenges?.[i - 1]) || { cleared: false, bestTime: null };

            const card = document.createElement("div");
            card.className = "anko-chal-card";
            card.innerHTML = `
        <div class="anko-chal-header">
          <div class="anko-chal-title">${def.title}</div>
          <span class="anko-chal-status">${st.cleared ? "✓達成済" : "未達成"}</span>
        </div>

        <div class="anko-chal-desc">${def.desc}</div>
        <div class="anko-chal-reward"><span class="pill">報酬</span> ${def.reward}</div>

        <div class="anko-chal-meta muted" style="font-size:12px;">
          最短タイム: ${st.bestTime ?? "—"}
        </div>

        <div class="anko-chal-actions">
          <button class="btn" data-chal-start="${i}">開始</button>
        </div>
      `;
            grid.appendChild(card);

            const running = state().anko?.activeChal ?? -1;
            if (running === i) {
                card.classList.add("running");
                const btn0 = card.querySelector(".btn");
                if (btn0) btn0.textContent = "中止";
            }

            const btn = card.querySelector(`[data-chal-start="${i}"]`);
            if (btn) {
                btn.addEventListener("click", () => {
                    startAnkoChallenge?.(i);
                });
            }
        }
    }

    function refreshAnkoChallengeRunningUI() {
        const grid = gridEl();
        if (!grid) return;

        const running = state().anko?.activeChal ?? -1;

        grid.querySelectorAll(".anko-chal-card").forEach((card, idx0) => {
            const idx = idx0 + 1;
            const isRunning = (idx === running);
            card.classList.toggle("running", isRunning);

            const btn = card.querySelector(".anko-chal-actions .btn");
            if (btn) btn.textContent = isRunning ? "中止" : "開始";
        });
    }

    function refreshAnkoChallengeClearedUI() {
        const grid = gridEl();
        if (!grid) return;

        grid.querySelectorAll(".anko-chal-card").forEach((card, idx0) => {
            const idx = idx0 + 1;
            const st = state().anko?.challenges?.[idx - 1];
            const cleared = !!(st && st.cleared);
            card.classList.toggle("cleared", cleared);

            const status = card.querySelector(".anko-chal-status");
            if (status) status.textContent = cleared ? "✓達成済" : "未達成";

            const meta = card.querySelector(".anko-chal-meta");
            if (meta) {
                const best = st?.bestTime ?? "—";
                meta.innerHTML = `最短タイム: ${best}`;
            }
        });
    }

    function refreshAll() {
        refreshAnkoChallengeRunningUI();
        refreshAnkoChallengeClearedUI();
    }

    function init() {
        buildAnkoChallenges();
        refreshAll();
    }

    return {
        init,
        buildAnkoChallenges,
        refreshAnkoChallengeRunningUI,
        refreshAnkoChallengeClearedUI,
        refreshAll,
        setStartHandler,
    };
}