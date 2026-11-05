const MODULE_ID = "mobile-5e-2014";
const SHEET_STYLE = "sheetStyle";

function applySheetStyle() {
  document.body.classList.toggle(
    "m5e-player",
    game.settings.get(MODULE_ID, SHEET_STYLE) === "mobile"
  );
}

Hooks.once("ready", () => {
  game.settings.register(MODULE_ID, SHEET_STYLE, {
    type: String,
    scope: "world",
    config: true,
    default: "default",
    choices: {
      mobile: "Mobile (module)",
      default: "Foundry default"
    },
    onChange: applySheetStyle
  });
  applySheetStyle();
});

Hooks.on("renderActorSheet", () => applySheetStyle());
