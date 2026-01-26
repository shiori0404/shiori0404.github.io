export function createBubble(deps) {
    const {
        linesNormal,          // ZUNDA_LINES_NORMAL
        autoDelayMs,          // ZUNDA_AUTO_DELAY_MS
        linesByProgress,      // ZUNDA_LINES_BY_PROGRESS
        spriteMap,            // ZUNDA_SPRITE
        els = {},             // optional: DOMを外から注入
        typeCps = 20,         // optional: デフォルトcps
        enableAutoTalk = true // optional: 自動発話ON/OFF
    } = deps;

    // --------------------------
    // DOM取得（外から渡されてればそれ優先）
    // --------------------------
    function getEls() {
        return {
            wrap: els.wrap ?? document.getElementById("char-bubble"),
            text: els.text ?? document.getElementById("char-bubble-text"),
            nextIcon: els.nextIcon ?? document.getElementById("bubble-next"),
            avatarImg: els.avatarImg ?? document.getElementById("char-avatar-img"),
        };
    }

    let intervalId = null;
    let typingToken = 0;

    let lastText = "";
    let isTyping = false;

    let lastIndex = -1;

    let zundaAutoTimeoutId = null;

    const ZUNDA_TUTORIAL_QUEUE = [];

    // --------------------------
    // 台詞選択
    // --------------------------
    function pickNormalLine() {
        if (!linesNormal || linesNormal.length === 0) {
            return { text: "", sprite: "normal" };
        }

        let i;
        if (linesNormal.length === 1) {
            i = 0;
        } else {
            do { i = Math.floor(Math.random() * linesNormal.length); }
            while (i === lastIndex);
        }

        lastIndex = i;
        const item = linesNormal[i];

        // ★形式保証
        if (typeof item === "string") {
            return { text: item, sprite: "normal" };
        }

        return {
            text: item.text ?? "",
            sprite: item.sprite ?? "normal",
        };
    }

    function enqueueTutorialForProgress(newP) {
        ZUNDA_TUTORIAL_QUEUE.length = 0;
        const pool = linesByProgress?.[newP];

        if (Array.isArray(pool) && pool.length > 0) {
            ZUNDA_TUTORIAL_QUEUE.push(...pool);
            ZUNDA_TUTORIAL_QUEUE.push("このメッセージが出たらエラーだよ　開発者に報告してね");
        }
    }

    function getNextZundaLine() {
        if (ZUNDA_TUTORIAL_QUEUE.length > 1) {
            return ZUNDA_TUTORIAL_QUEUE.shift();
        } else if (ZUNDA_TUTORIAL_QUEUE.length === 0) {
            return pickNormalLine();
        }
        // queueが1のとき = チュートリアルの最後のセリフ
        return { text: "", sprite: "normal" };
    }

    // --------------------------
    // UI更新
    // --------------------------
    function updateBubbleNextIcon() {
        const { nextIcon: icon, wrap } = getEls();
        if (!icon || !wrap) return;

        if (wrap.hidden) {
            icon.classList.add("is-hidden");
            return;
        }

        const hasQueue = ZUNDA_TUTORIAL_QUEUE.length > 1;
        const typingDone = !isTyping;

        if (hasQueue && typingDone) icon.classList.remove("is-hidden");
        else icon.classList.add("is-hidden");
    }

    function updateBubbleCursor() {
        const { wrap: bubble } = getEls();
        if (!bubble) return;

        const hasNext = ZUNDA_TUTORIAL_QUEUE.length > 1;
        const clickable = hasNext || isTyping;

        if (clickable) bubble.classList.remove("normal-cursor");
        else bubble.classList.add("normal-cursor");
    }

    function setZundaSprite(key) {
        const { avatarImg: avatar } = getEls();
        if (!avatar) return;

        const src = (spriteMap?.[key]) ?? (spriteMap?.normal);
        if (!src) return;

        if (avatar.dataset.sprite !== key) {
            avatar.src = src;
            avatar.dataset.sprite = key;
        }
    }

    // --------------------------
    // タイプライター
    // --------------------------
    function stopTyping() {
        if (intervalId) { clearInterval(intervalId); intervalId = null; }
    }

    function showType(text, { cps = 18 } = {}) {
        const { wrap, text: el } = getEls();
        if (!wrap || !el) return;

        typingToken++;
        const myToken = typingToken;

        stopTyping();

        lastText = String(text ?? "");
        isTyping = true;

        wrap.hidden = false;
        el.textContent = "";

        cps = Math.max(1, Number(cps) || 18);
        const intervalMs = Math.round(1000 / cps);

        let i = 0;
        intervalId = setInterval(() => {
            if (myToken !== typingToken) return;

            i++;
            el.textContent = lastText.slice(0, i);

            if (i >= lastText.length) {
                stopTyping();
                isTyping = false;
                updateBubbleNextIcon();
                updateBubbleCursor();
            }
        }, intervalMs);
    }

    function revealAll() {
        const { text: el } = getEls();
        if (!el) return;
        if (!isTyping) return;

        typingToken++;
        stopTyping();

        el.textContent = lastText;
        isTyping = false;
        updateBubbleNextIcon();
        updateBubbleCursor();
    }

    // --------------------------
    // 次のセリフ
    // --------------------------
    function showNextZundaLine() {
        const item = getNextZundaLine();
        if (!item || item.text === "") return;

        setZundaSprite(item.sprite);
        showType(item.text, { cps: typeCps });

        updateBubbleNextIcon();
        updateBubbleCursor();

        resetZundaAutoTalkTimer();
    }

    // --------------------------
    // 自動発話
    // --------------------------
    function resetZundaAutoTalkTimer() {
        if (!enableAutoTalk) return;

        if (zundaAutoTimeoutId) {
            clearTimeout(zundaAutoTimeoutId);
            zundaAutoTimeoutId = null;
        }

        zundaAutoTimeoutId = setTimeout(() => {
            // チュートリアル中は何もしない
            if (ZUNDA_TUTORIAL_QUEUE.length > 0) return;

            // タイピング中は割り込まない
            if (api.isTyping()) {
                resetZundaAutoTalkTimer();
                return;
            }

            const { wrap: bubble } = getEls();
            if (bubble && bubble.hidden) bubble.hidden = false;

            showNextZundaLine();

            // 自動発話が起きた瞬間から再カウント
            resetZundaAutoTalkTimer();
        }, autoDelayMs);
    }

    // --------------------------
    // click bind / preload
    // --------------------------
    function bindClick() {
        const { wrap } = getEls();
        if (!wrap) return;

        wrap.addEventListener("click", (e) => {
            e.preventDefault();

            if (isTyping) {
                revealAll();
                return;
            }

            showNextZundaLine();
        });
    }

    function preloadZundaSprites() {
        if (!spriteMap) return;
        for (const src of Object.values(spriteMap)) {
            const img = new Image();
            img.src = src;
        }
    }

    function init() {
        preloadZundaSprites();
        bindClick();
        resetZundaAutoTalkTimer();
        updateBubbleNextIcon();
        updateBubbleCursor();
    }

    function dispose() {
        stopTyping();
        typingToken++;
        if (zundaAutoTimeoutId) {
            clearTimeout(zundaAutoTimeoutId);
            zundaAutoTimeoutId = null;
        }
    }

    const api = {
        init,
        dispose,

        // 外部から使う
        showType,
        revealAll,
        showNextZundaLine,
        enqueueTutorialForProgress,
        resetZundaAutoTalkTimer,
        setZundaSprite,
        bindClick,

        // 状態参照
        isTyping: () => isTyping,
    };

    return api;
}