import Decimal from "../../node_modules/break_infinity.js";

export { Decimal };

export function D(x) {
    if (x instanceof Decimal) return x;
    return new Decimal(x);
}

export const INF = D("1.7976931348623157e308"); 