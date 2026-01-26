import { D } from "../constants/numbers.js";

// あんこディメンションのコスト設定
export const AD_COST = (() => {
    const cost = {};
    for (let i = 1; i <= 8; i++) {
        const step = Math.pow(4, i);       // numberでOK
        const base = (i === 1) ? 1 : step; // number
        cost[i] = { base, step };
    }
    return cost;
})();

/**
 * あんこディメンションのコスト計算（純粋関数）
 * @param {number} dim - ディメンション番号
 * @param {number|Decimal} bought - 購入数
 * @returns {number|null}
 */
export function calcAdCost(dim, bought) {
    const rule = AD_COST[dim];
    if (!rule) return null;

    const b = bought ?? 0;
    return Math.ceil(rule.base * Math.pow(rule.step, b));
}

// 1個のコスト（boughtは数値で渡す想定）
export function calcAdUnitCost(dim, bought) {
    const rule = AD_COST[dim];
    if (!rule) return null;

    const b = D(bought); // Decimal保証
    return D(rule.base).mul(D(rule.step).pow(b));
}

// n個まとめ買いの合計コスト（等比）
export function calcAdTotalCost(dim, bought, n) {
    const rule = AD_COST[dim];
    if (!rule) return null;

    const b = D(bought);
    const N = D(n).floor().max(1);

    const a = D(rule.base).mul(D(rule.step).pow(b));
    const r = D(rule.step);

    // r === 1 の特例
    if (r.eq(1)) {
        return a.mul(N).ceil();
    }

    // a * (r^n - 1) / (r - 1)
    return a
        .mul(r.pow(N).minus(1))
        .div(r.minus(1))
        .ceil();
}

// APでn個買える？
export function canAffordAd(dim, bought, ap, n = 1) {
    const total = calcAdTotalCost(dim, bought, n);
    if (!total) return false;
    return D(ap).gte(total);
}

// 最大購入数（2分探索）
export function maxAffordableAd(dim, bought, ap) {
    const rule = AD_COST[dim];
    if (!rule) return 0;

    const b = D(bought);
    const have = D(ap);

    const totalCost = (n) => calcAdTotalCost(dim, b, n);

    let lo = 0, hi = 1;

    while (totalCost(hi).lte(have)) hi *= 2;
    while (lo < hi) {
        const mid = Math.ceil((lo + hi) / 2);
        if (totalCost(mid).lte(have)) lo = mid;
        else hi = mid - 1;
    }
    return lo;
}