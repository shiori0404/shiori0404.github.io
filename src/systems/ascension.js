export function createAscensionSystem(deps) {
    const { getState, ASC_UNLOCK, D } = deps;

    function canAscend() {
        const state = getState();
        // ASC_UNLOCK が number(1e16) なら D(ASC_UNLOCK) にする
        // すでに Decimal ならそのまま
        const th = (ASC_UNLOCK?.gte || ASC_UNLOCK?.lt) ? ASC_UNLOCK : D(ASC_UNLOCK);
        return state.zunda.gte(th);
    }

    return { canAscend };
}