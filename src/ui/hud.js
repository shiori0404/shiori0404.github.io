export function createHUD(deps) {
    const {
        getState,        // () => state
        el,              // (id) => HTMLElement|null
        fmt,             // (x) => string
        effectiveZps,    // () => Decimal|number
    } = deps;

    function updateHUD() {
        const state = getState();
        const elZ = el("zunda");
        const elP = el("pps");
        const elE = el("elapsed");

        if (elZ) elZ.textContent = fmt(state.zunda);
        if (elP) elP.textContent = fmt(effectiveZps());
        if (elE) elE.textContent = state.runSecondsAnko.toFixed(1) + "s";
    }

    return { updateHUD };
}