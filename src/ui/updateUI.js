export function createUpdateUI(deps) {
    const {
        updateHUD,
        updateZundaDimsSummary,

        refreshCosts,
        refreshBoostAndAsc,
        updateVisibility,

        refreshPrestigeUIWrapper,

        refreshEdamameSoyUI,
        refreshEdamameSoyButtons,
        setEdaButtonState,

        refreshAnkoAP,
        refreshAnkoDimsUI,

        askill, // { updateAskillDescriptions? }

        updateAutomationIfDirty,
        updateMiscBars,
    } = deps;

    return function updateUI() {
        updateHUD?.();
        updateZundaDimsSummary?.();

        refreshCosts?.();
        refreshBoostAndAsc?.();
        updateVisibility?.();

        refreshPrestigeUIWrapper?.();

        refreshEdamameSoyUI?.();
        refreshEdamameSoyButtons?.();
        setEdaButtonState?.();

        refreshAnkoAP?.();
        refreshAnkoDimsUI?.();

        askill?.updateAskillDescriptions?.();

        updateAutomationIfDirty?.();
        updateMiscBars?.();
    };
}