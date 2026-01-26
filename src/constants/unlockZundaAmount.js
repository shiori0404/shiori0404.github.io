import { D } from "./numbers.js";

// アンロックに必要なずんだ量
export const ASC_UNLOCK = D('1e16');
export const PRESTIGE_UNLOCK = D('1e40');
export const BOOST_UNLOCK = D('1e10');
export const EDA_UNLOCK = D('1e150');

export const AUTO_THRESH_BY_ZUNDA = {
    zd: ['1e35', '1e45', '1e55', '1e65', '1e75', '1e85', '1e95', '1e105'].map(D),
    boost: D('1e115')
};