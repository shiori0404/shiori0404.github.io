export function createVisibilityUI(deps) {
    const {
        getTiers, // () => tiers
        D,        // Decimal化ヘルパ（D(x) => Decimal）
    } = deps;

    // ZD2以降の表示/非表示切り替え
    function updateVisibility() {
        const tiers = getTiers();

        for (let i = 2; i <= 8; i++) {
            const row = document.getElementById(`row-zd${i}`);
            if (!row) continue;

            const lower = tiers[i - 1];
            const shouldShow = D(lower.bought).gt(0);

            // display の既存値は触りすぎない（初期がgrid想定）
            row.style.display = shouldShow ? "grid" : "none";
        }
    }

    return { updateVisibility };
}