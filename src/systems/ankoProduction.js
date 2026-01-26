import { D } from "../constants/numbers.js";

/**
 * ANKO 生産 tick
 * @param {object} state
 * @param {number} dt
 * @param {object} mults - { ad1Mul, ad2Mul }
 */
export function tickAnko(state, dt, mults) {
    const ad1Mul = mults?.ad1Mul ?? 1;
    const ad2Mul = mults?.ad2Mul ?? 1;

    // 上位→下位を生成（8->2）
    for (let i = 8; i >= 2; i--) {
        const self = state.anko.dims[i];
        const lower = state.anko.dims[i - 1];

        const effA = self.bought.mul(self.generated);
        let rateA = effA.mul(self.prodPerSec);

        if (i === 2) rateA = rateA.mul(ad2Mul);

        lower.generated = lower.generated.add(rateA.mul(dt));
    }

    // ad1 -> anko.amount
    const ad1 = state.anko.dims[1];
    const eff1 = ad1.bought.mul(ad1.generated);
    const rateA1 = eff1.mul(ad1.prodPerSec).mul(ad1Mul);

    if (rateA1.gt(0)) {
        // state.anko.amount は Decimal 統一なら D(...) は不要。保険で残してもOK
        state.anko.amount = D(state.anko.amount || 0).add(rateA1.mul(dt));
    }
}