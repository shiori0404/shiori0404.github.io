const DEFAULT_TAB = "zunda";

/**
 * タブ機能を初期化する
 * - クリックでタブ切り替え
 * - localStorage にアクティブタブを保存/復元
 *
 * @param {object} opts
 * @param {string} [opts.storageKey] localStorageキー
 * @param {string} [opts.defaultTab] 初期タブ名
 * @param {Document|HTMLElement} [opts.root] イベントを張るroot（通常document）
 * @returns {{ switchTab: (name:string)=>void, dispose: ()=>void }}
 */
export function initTabs(opts = {}) {
    const {
        storageKey = "zunda_active_tab",
        defaultTab = DEFAULT_TAB,
        root = document,
    } = opts;

    function switchTab(name) {
        // view内容切り替え
        document.querySelectorAll(".tab-btn").forEach((b) =>
            b.classList.toggle("active", b.dataset.target === `view-${name}`)
        );
        document.querySelectorAll(".view").forEach((v) =>
            v.classList.toggle("active", v.id === `view-${name}`)
        );

        // キャラ切り替え
        document.querySelectorAll(".char-portrait").forEach((c) =>
            c.classList.remove("active")
        );
        const charEl = document.getElementById(`char-${name}`);
        if (charEl) charEl.classList.add("active");

        try { localStorage.setItem(storageKey, name); } catch (e) { }
    }

    function onClick(e) {
        const btn = e.target.closest(".tab-btn");
        if (!btn) return;

        const target = btn.dataset.target?.replace("view-", "");
        if (target) switchTab(target);
    }

    // イベント登録
    root.addEventListener("click", onClick);

    // 初期タブ復元
    let n = defaultTab;
    try { n = localStorage.getItem(storageKey) || defaultTab; } catch (e) { }
    switchTab(n);

    // 解除用（開発/ホットリロード対策）
    function dispose() {
        root.removeEventListener("click", onClick);
    }

    return { switchTab, dispose };
}