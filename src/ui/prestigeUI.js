export function createPrestigeUI(deps) {
    const {
        getState,     // () => state
        el,           // (id) => HTMLElement|null
        D,            // Decimal化ヘルパ
        toNum,        // number化ヘルパ（state.zundaがDecimalじゃない旧セーブ対策）
        PRESTIGE_UNLOCK,
        prestigeRawLevelFromZ, // (zunda) => number
    } = deps;

    let dirty = true;

    function markDirty() { dirty = true; }

    function hasDom() {
        // 最低限これがあれば更新できる、みたいな基準
        return !!document.getElementById("doPrestigeSpeed");
    }

    function refreshPrestigeUI() {
        const state = getState();

        const unlocked = state.zunda?.gte
            ? state.zunda.gte(D(PRESTIGE_UNLOCK))
            : (toNum(state.zunda) >= PRESTIGE_UNLOCK);

        const curSpd = state.prestige?.speed || 0;
        const curPow = state.prestige?.power || 0;
        const curCst = state.prestige?.cost || 0;

        const calc = unlocked ? prestigeRawLevelFromZ(state.zunda) : -1;

        const nextSpd = unlocked ? Math.max(curSpd, Math.max(0, calc)) : curSpd;
        const nextPow = unlocked ? Math.max(curPow, Math.max(0, calc)) : curPow;
        const nextCst = unlocked ? Math.max(curCst, Math.max(0, calc)) : curCst;

        const canSpd = unlocked && (calc > curSpd);
        const canPow = unlocked && (calc > curPow);
        const canCst = unlocked && (calc > curCst);

        const spdLabel = el("spdLabel");
        const powLabel = el("powLabel");
        const cstLabel = el("cstLabel");

        if (spdLabel) spdLabel.textContent = `Lv${curSpd} → Lv${nextSpd}`;
        if (powLabel) powLabel.textContent = `Lv${curPow} → Lv${nextPow}`;
        if (cstLabel) cstLabel.textContent = `Lv${curCst} → Lv${nextCst}`;

        const btnSpd = el("doPrestigeSpeed");
        const btnPow = el("doPrestigePower");
        const btnCst = el("doPrestigeCost");

        if (btnSpd) btnSpd.disabled = !canSpd;
        if (btnPow) btnPow.disabled = !canPow;
        if (btnCst) btnCst.disabled = !canCst;
    }

    function refreshIfDirty() {
        if (!dirty) return;
        if (!hasDom()) return; // DOM無いなら何もしない（落下防止）
        dirty = false;
        refreshPrestigeUI();
    }

    return { markDirty, refreshIfDirty };
}