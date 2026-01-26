export function createBoostAscUI(deps) {
    const {
        el, fmt, fmt2, D, Decimal,
        getState,
        ASC_UNLOCK,
        boostTotal, getBoostPerItem,
        zundaBoostCost, canUseBoost, maxBoostAffordableZunda,
        ascNewMultFrom,
    } = deps;

    function canAscend() {
        const state = getState();
        return state.zunda.gte(ASC_UNLOCK);
    }

    function refreshBoostUI() {
        const state = getState();

        const btn = el("buyBoost");
        const cnt = el("boostCount");
        const mult = el("boostMult");
        const btnMax = el("buyBoostMax");

        const total = boostTotal();
        const perItem = getBoostPerItem();
        const cost = zundaBoostCost();

        if (cnt) cnt.textContent = String(total);
        if (mult) mult.textContent = fmt(D(perItem).pow(total).toFixed(2) + "×");

        if (!canUseBoost()) {
            if (btn) { btn.textContent = "解禁条件: 1e10 ずんだ"; btn.disabled = true; }
            if (btnMax) { btnMax.textContent = "最大購入"; btnMax.disabled = true; }
            return;
        }

        if (btn) {
            btn.textContent = `購入 ${fmt(cost)}`;
            btn.disabled = state.zunda.lt(cost);
        }

        const m = maxBoostAffordableZunda();
        if (btnMax) {
            btnMax.textContent = "最大購入";
            btnMax.disabled = m <= 0;
        }
    }

    function refreshAscUI() {
        const state = getState();

        const btn = el("doAscend");
        const nowEl = el("ascNow");

        const nowRaw = Math.max(state.ascensionMult, 1);
        const nextRaw = ascNewMultFrom(Decimal.max(state.zunda, D(1)));

        if (nowEl) nowEl.textContent = "×" + fmt(nowRaw.toFixed(2));

        if (!btn) return;

        const unlocked = canAscend();
        const betterRaw = nextRaw > nowRaw;

        if (!unlocked) {
            btn.innerHTML = `ずんだアセンション<br><span class="sub">解禁条件: 1e16 ずんだ</span>`;
            btn.disabled = true;
        } else {
            const ratioEff = nextRaw / nowRaw;
            btn.innerHTML = `ずんだアセンションを発動<br><span class="sub">倍率: ×${fmt2(ratioEff.toFixed(2))}</span>`;
            btn.disabled = !betterRaw;
        }
    }

    function refreshBoostAndAsc() {
        refreshBoostUI();
        refreshAscUI();
    }

    return { refreshBoostUI, refreshAscUI, refreshBoostAndAsc };
}