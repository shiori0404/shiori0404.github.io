export function createMiscBars(deps) {
    const { getState } = deps;

    function updateMiscBars() {
        const state = getState();

        const apEl2 = document.getElementById("apAmount");
        if (apEl2) apEl2.textContent = state.ap.toString();

        const bar = document.getElementById("anconityBar");
        if (bar) bar.style.display = state.anconityReady ? "block" : "none";
    }

    return { updateMiscBars };
}