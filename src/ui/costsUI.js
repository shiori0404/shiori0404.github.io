export function createCostsUI(deps) {
    const {
        el, fmt,
        getState, getTiers,
        costAt, maxAffordable, totalCost,
        edaBoostCost, edaExpCost,
        soyBoostUpCost, soyZd8Cost,
    } = deps;

    function refreshCosts() {
        const state = getState();
        const tiers = getTiers();

        for (let i = 1; i <= 8; i++) {
            const t = tiers[i];
            const cost1 = costAt(t); // Decimal

            const nCost1 = el(`cost1-zd${i}`);
            if (nCost1) nCost1.textContent = fmt(cost1);

            const m = maxAffordable(t);

            const nCostMax = el(`costMax-zd${i}`);
            const nBuyMax = el(`buyMax-zd${i}`);

            if (m > 0) {
                if (nCostMax) nCostMax.textContent = fmt(totalCost(t, m));
                if (nBuyMax) nBuyMax.disabled = false;
            } else {
                if (nCostMax) nCostMax.textContent = fmt(cost1);
                if (nBuyMax) nBuyMax.disabled = true;
            }

            const nBuy1 = el(`buy1-zd${i}`);
            if (nBuy1) nBuy1.disabled = state.zunda.lt(cost1);
        }

        // 枝豆
        const eBoost = el("edaBoostCost");
        if (eBoost) eBoost.textContent = fmt(edaBoostCost());

        const eExp = el("edaExpCost");
        if (eExp) eExp.textContent = fmt(edaExpCost());

        // 大豆
        const sBoostUp = el("soyBoostUpCost");
        if (sBoostUp) sBoostUp.textContent = fmt(soyBoostUpCost());

        const sZd8 = el("soyZd8Cost");
        if (sZd8) sZd8.textContent = fmt(soyZd8Cost());
    }

    return { refreshCosts };
}