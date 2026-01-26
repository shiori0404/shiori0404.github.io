export function createAnkoChallengeLogic(deps) {
    const {
        getState,                 // () => state
        D,                        // Decimalラッパ（D(0)とか）
        DateNow = () => Date.now(),

        // 既存ロジック（外から注入）
        doAnconityReset,          // () => void
        isChal,                   // (idx:number) => boolean
        grantAnkoChallengeReward, // (idx:number) => void | optional

        // 反映・副作用（外から注入）
        recomputeAllSkillEffects, // () => void
        refreshBoostAndAsc,       // () => void | optional
        refreshAscUI,             // () => void
        refreshCostMultipliers,   // () => void | optional
        updateUI,                 // () => void | optional
        save,                     // () => void | optional

        // ★UI側へ通知（UIモジュールはロジックから見ない）
        onUIUpdate,               // () => void | optional
    } = deps;

    function state() { return getState(); }

    function stopAnkoChallenge() {
        const s = state();
        if (!s.anko) return;
        s.anko.activeChal = -1;

        recomputeAllSkillEffects?.();
        onUIUpdate?.();
        updateUI?.();
    }

    function startAnkoChallenge(idx) {
        const s = state();
        s.anko = s.anko || {};
        const running = s.anko.activeChal ?? -1;

        // 同じものが実行中なら中止扱い
        if (running === idx) {
            stopAnkoChallenge();
            return;
        }

        // ほかが走ってたら止める
        if (running !== -1) stopAnkoChallenge();

        // アンコニティ開始時と同じ状態へリセット
        doAnconityReset();

        s.anko.activeChal = idx;
        s.anko.chalStartMs = DateNow();
        s.anko.chalCounters = {
            ascCount: 0,
            totalDimBought: D(0),
            perDimOwned: Array(9).fill(0),
        };

        if (isChal?.(5)) {
            s.zunda = D(100);
        }

        recomputeAllSkillEffects?.();
        refreshBoostAndAsc?.();
        refreshAscUI?.();

        onUIUpdate?.();
        updateUI?.();
    }

    function completeAnkoChallenge() {
        const s = state();
        const running = s?.anko?.activeChal ?? -1;
        if (running === -1) return;

        // 進捗更新
        s.anko.challenges = s.anko.challenges || [];
        const slot =
            s.anko.challenges[running - 1] ||
            (s.anko.challenges[running - 1] = { cleared: false, bestTime: null });

        slot.cleared = true;

        // ベスト更新（秒）
        const t = s.runSecondsAnko ?? null;
        if (t != null) {
            if (slot.bestTime == null || t < slot.bestTime) slot.bestTime = t;
        }

        // 報酬
        grantAnkoChallengeReward?.(running);

        // チャレンジから抜ける
        s.anko.activeChal = -1;

        // 効果・コスト再評価
        recomputeAllSkillEffects?.();
        refreshCostMultipliers?.();

        onUIUpdate?.();
        updateUI?.();
        save?.();
    }

    return {
        startAnkoChallenge,
        stopAnkoChallenge,
        completeAnkoChallenge,
    };
}