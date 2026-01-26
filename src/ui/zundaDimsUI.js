export function createZundaDimsUI(deps) {
    const {
        el,        // (id) => HTMLElement|null
        softFmt,   // (x) => string
        getTiers,  // () => tiers
    } = deps;

    function updateZundaDimsSummary() {
        const tiers = getTiers();
        for (let i = 1; i <= 8; i++) {
            const owned = el(`owned-zd${i}`);
            const gen = el(`gen-zd${i}`);

            if (owned) owned.textContent = softFmt(tiers[i].bought);
            if (gen && i <= 7) gen.textContent = softFmt(tiers[i].generated);
        }
    }

    return { updateZundaDimsSummary };
}