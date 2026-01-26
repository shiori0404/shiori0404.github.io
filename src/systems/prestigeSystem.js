export const PRESTIGE_REF = 38.8; // アンカー基準
export const PRESTIGE_P = 1.25;   // 1.10〜1.25で好みへ
export const PRESTIGE_S = 6;      // 立ち上がり感はSで微調整

export function createPrestigeSystem(deps) {
    const { toNum, log10Safe } = deps;

    function prestigeRawLevelFromZ(zDec) {
        const lg = toNum(log10Safe(zDec));
        const L = lg - PRESTIGE_REF;
        if (L <= 0) return -1;

        // 1e45→Lv6 に合うよう毎回決定
        const L0 = (45 - PRESTIGE_REF);
        const A = 6 / Math.pow(Math.log(1 + L0 / PRESTIGE_S), PRESTIGE_P);

        const lvl = A * Math.pow(Math.log(1 + L / PRESTIGE_S), PRESTIGE_P);
        return Math.floor(lvl);
    }

    return { prestigeRawLevelFromZ };
}