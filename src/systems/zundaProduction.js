import { D } from "../constants/numbers.js";

/**
 * ZUNDA 生産 tick（上位→下位生成）
 * @param {object} state
 * @param {number} dt
 * @param {Array} tiers - ZUNDA tier配列（1..8想定）
 * @param {object} mults - {
 *   bMult, aMult, ankoM, zdMultAP, zd8m, zdEffMul
 * }
 */
export function tickZunda(state, dt, tiers, mults) {
    const bMult = mults?.bMult ?? 1;
    const aMult = mults?.aMult ?? 1;
    const ankoM = mults?.ankoM ?? 1;
    const zdMultAP = mults?.zdMultAP ?? 1;
    const zd8m = mults?.zd8m ?? 1;
    const zdEffMul = mults?.zdEffMul ?? 1;

    // 上位→下位を生成 (8->2)
    for (let i = 8; i >= 2; i--) {
        const p = tiers[i];
        const t = tiers[i - 1];

        // rate = bought * generated * prodPerSec
        // bought/generated は Decimal想定、prodPerSecは numberでもOK
        let rate = D(p?.bought || 0).mul(p?.generated || 1).mul(p?.prodPerSec || 0);

        let rDec = rate
            .mul(bMult)
            .mul(aMult)
            .mul(ankoM)
            .mul(zdMultAP)
            .mul(zdEffMul);

        if (i === 8) rDec = rDec.mul(zd8m);

        if (rDec.gt(0)) {
            t.generated = t.generated.add(rDec.mul(dt));
        }
    }
}