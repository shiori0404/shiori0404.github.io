export function createAutomationLogic(deps) {
    const { getState, save, onAfterToggle } = deps;

    function toggleAllAutomation(on) {
        const state = getState();

        // ZD1〜ZD8
        for (let i = 0; i < 8; i++) {
            if (state.auto.unlocked.zd[i]) {
                state.auto.enabled.zd[i] = !!on;
                state.auto.enabled.zdFast[i] = !!on;
            }
        }
        // BOOST
        if (state.auto.unlocked.boost) {
            state.auto.enabled.boost = !!on;
        }
        // Ascension
        if (state.auto.unlocked.asc) {
            state.auto.enabled.asc = !!on;
        }
        // Prestige
        if (state.auto.unlocked.prest) {
            state.auto.enabled.prest.speed = !!on;
            state.auto.enabled.prest.power = !!on;
            state.auto.enabled.prest.cost = !!on;
        }

        save?.();
        onAfterToggle?.(); // ★UI更新は外へ
    }

    return { toggleAllAutomation };
}