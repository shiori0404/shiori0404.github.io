export function createAutomationCardsUI(deps) {
    const {
        getState,                  // () => state
        el,                        // (id) => HTMLElement | null
        save,                      // () => void
        attachNumericInputHandler, // (inp, get, set, opts) => void
        Decimal,                   // Decimal constructor/class
    } = deps;

    function maybeBuildAscAutomationCard(container) {
        const state = getState();
        const rootMain = container || el("autoRows");
        if (!rootMain) return;

        const unlocked = !!state?.auto?.unlocked?.asc;
        const exists = document.getElementById("autoCard-asc");

        if (!unlocked) { if (exists) exists.remove(); return; }
        if (exists) return;

        let group = document.getElementById("autoAutomationGroup");
        if (!group) {
            group = document.createElement("div");
            group.className = "auto-row-group";
            group.id = "autoAutomationGroup";

            const boostRow = document.querySelector("#autoList .auto-row:last-of-type");
            if (boostRow && boostRow.querySelector("#autoToggle-boost")) {
                boostRow.after(group);
            } else {
                rootMain.appendChild(group);
            }
        }

        const ascCard = document.createElement("div");
        ascCard.className = "auto-card quarter";
        ascCard.id = "autoCard-asc";
        ascCard.innerHTML = `
      <div class="head-auto">
        <div class="top-row">
          <div class="name">アセンション</div>
          <div class="tip-wrap">
            <div class="tip-btn">?</div>
            <div class="tip-box">
              <div style="font-weight:700;margin-bottom:6px;">アセンション自動実行について</div>
              <ul style="margin:0;padding-left:18px;">
                <li>アセンションの実行倍率が現在の倍率より指定倍率高くなるたびに、自動でアセンションを行います。</li>
                <li>例:現在の実行倍率がx6で指定倍率がx4のとき、実行倍率がx24になるタイミングで自動実行する。</li>
              </ul>
            </div>
          </div>
        </div>
        <span class="pill" id="autoLock-asc">アンロック済み</span>
      </div>

      <div class="ctrl">
        <label style="display:flex;align-items:center;gap:8px;">
          <input type="checkbox" id="autoToggle-asc">
          <span>自動実行</span>
        </label>
        <div class="row">
          <div>実行倍率</div>
          <input type="text" id="autoAscMul" inputmode="decimal" autocomplete="off" spellcheck="false">
        </div>
      </div>
    `;
        group.appendChild(ascCard);

        // トグル
        ascCard.querySelector("#autoToggle-asc")?.addEventListener("change", (e) => {
            const s = getState();
            s.auto.enabled.asc = !!e.target.checked;
            save?.();
        });

        // 倍率入力
        const inpAsc = ascCard.querySelector("#autoAscMul");
        attachNumericInputHandler(
            inpAsc,
            () => {
                const s = getState();
                let v = s.auto.ascMul;
                if (v == null) return "4";
                if (typeof v === "number") return String(v);
                return String(v);
            },
            (v) => {
                const s = getState();
                s.auto.ascMul = v;
            },
            { min: new Decimal(1) }
        );

        // ── プレステージ自動化カード ──
        const prestUnlocked = !!state.auto?.unlocked?.prest;
        const prestTypes = [
            { key: "speed", label: "スピードプレステージ", cardId: "autoCard-prest-speed", toggleId: "autoToggle-prest-speed", inputId: "autoPrestMul-speed" },
            { key: "power", label: "パワープレステージ", cardId: "autoCard-prest-power", toggleId: "autoToggle-prest-power", inputId: "autoPrestMul-power" },
            { key: "cost", label: "コストプレステージ", cardId: "autoCard-prest-cost", toggleId: "autoToggle-prest-cost", inputId: "autoPrestMul-cost" },
        ];

        prestTypes.forEach((info) => {
            let card = document.getElementById(info.cardId);

            if (!prestUnlocked) {
                if (card) card.remove();
                return;
            }
            if (card) return;

            card = document.createElement("div");
            card.className = "auto-card quarter";
            card.id = info.cardId;

            const tipTitle =
                info.key === "speed" ? "スピードプレステージ自動化について" :
                    info.key === "power" ? "パワープレステージ自動化について" :
                        "コストプレステージ自動化について";

            card.innerHTML = `
        <div class="head-auto">
          <div class="top-row">
            <div class="name">${info.label}</div>
            <div class="tip-wrap">
              <div class="tip-btn">?</div>
              <div class="tip-box">
                <div style="font-weight:700;margin-bottom:6px;">${tipTitle}</div>
                <ul style="margin:0;padding-left:18px;">
                  <li>${info.label}のレベルが現在のレベルより指定レベル高くなるごとに自動で実行します。</li>
                  <li>例:現在レベル15で指定レベル+5のとき、レベル20のタイミングで自動実行する。</li>
                </ul>
              </div>
            </div>
          </div>
          <span class="pill" id="autoLock-prest-${info.key}">アンロック済</span>
        </div>

        <div class="ctrl">
          <label style="display:flex;align-items:center;gap:8px;">
            <input type="checkbox" id="${info.toggleId}">
            <span>自動実行</span>
          </label>
          <div class="row">
            <div>実行レベル +</div>
            <input type="text" id="${info.inputId}" inputmode="decimal" autocomplete="off" spellcheck="false">
          </div>
        </div>
      `;
            group.appendChild(card);

            // トグル
            card.querySelector("#" + info.toggleId)?.addEventListener("change", (e) => {
                const s = getState();
                s.auto.enabled.prest ??= { speed: false, power: false, cost: false };
                s.auto.enabled.prest[info.key] = !!e.target.checked;
                save?.();
            });

            // 入力
            const inp = card.querySelector("#" + info.inputId);
            attachNumericInputHandler(
                inp,
                () => {
                    const s = getState();
                    s.auto.prestMul ??= {};
                    let v = s.auto.prestMul[info.key];
                    if (v == null) return "4";
                    if (typeof v === "number") return String(v);
                    return String(v);
                },
                (v) => {
                    const s = getState();
                    s.auto.prestMul ??= {};
                    s.auto.prestMul[info.key] = v;
                },
                { min: new Decimal(1) }
            );
        });
    }

    return { maybeBuildAscAutomationCard };
}