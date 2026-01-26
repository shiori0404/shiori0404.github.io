/**
 * tick内で使う倍率をまとめて計算する
 * - getEffects() は外で1回計算して渡す（責務分離）
 * - ここでは「各倍率をどうまとめるか」だけを担当
 *
 * @param {object} state
 * @param {object} deps - tickStep側で用意した関数群
 * @param {object} ef - getEffects() の結果
 */
export function calcTickMults(state, deps, ef) {
    const {
        getBoostMult,
        getAscEffective,
        getZdMultFromUnspentAp,
        getZd8Mult,
        getAnkoZundaMult,
    } = deps;

    const bMult = getBoostMult();
    const aMult = getAscEffective();
    const zdMultAP = getZdMultFromUnspentAp();
    const zd8m = getZd8Mult();
    const ankoM = getAnkoZundaMult();

    return {
        // ZUNDA生産で使う
        zunda: {
            bMult,
            aMult,
            zdMultAP,
            zd8m,
            ankoM,
            zdEffMul: ef?.zdEffMul || 1,
        },

        // ANKO生産で使う
        anko: {
            ad1Mul: ef?.ad1Mul || 1,
            ad2Mul: ef?.ad2Mul || 1,
        },

        // tickStep内の他処理が使うならここへ
        raw: {
            bMult,
            aMult,
            zdMultAP,
            zd8m,
            ankoM,
            ef,
        },
    };
}