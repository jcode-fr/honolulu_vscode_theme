import { ThemeColors } from "../types"
import { COLORS } from "./colors"
import { CONFIG } from "./config"

/* COMMONS
 *****************************************************************/
const COMMONS = {
  focusBorder: COLORS.white,
  foreground: "#e2eaf5",
}

/* ACTIVITY_BAR
 *****************************************************************/
const ACTIVITY_BAR = {
  "activityBar.background": COLORS.backgrounds,
  "activityBar.border": COLORS.surfaces,
  "activityBar.inactiveForeground": "#80878e",
  "activityBarBadge.background": COLORS.entity_names,
  "activityBarBadge.foreground": COLORS.white,
}

/* BADGE
 *****************************************************************/
const BADGE = {
  "badge.background": COLORS.entity_names,
  "badge.foreground": COLORS.white,
}

/* BUTTON
 *****************************************************************/
const BUTTON = {
  "button.background": COLORS.entity_names,
  "button.hoverBackground": COLORS.variables,
  "button.secondaryBackground": COLORS.surfaces,
  "button.secondaryHoverBackground": "#363447",
}

/* DEBUG_TOOLBAR
 *****************************************************************/
const DEBUG_TOOLBAR = {
  "debugToolBar.background": COLORS.surfaces,
  "debugToolBar.border": COLORS.surfaces,
}

/* DIFF_EDITOR
 *****************************************************************/
const DIFF_EDITOR = {
  "diffEditor.border": COLORS.surfaces,
}

/* EDITOR
 *****************************************************************/
const EDITOR = {
  "editor.background": COLORS.backgrounds,
  "editor.foreground": COLORS.white,
  "editor.lineHighlightBackground": "#30303091",
  "editor.lineHighlightBorder": "#de090900",
  "editor.selectionBackground": "#f7a0d336",
  "editorCodeLens.foreground": "#80878e",
  "editorCursor.background": COLORS.white,
  "editorCursor.foreground": COLORS.keywords,
  "editorGroup.border": COLORS.surfaces,
  "editorGroupHeader.tabsBackground": COLORS.backgrounds,
  "editorHoverWidget.background": COLORS.surfaces,
  "editorHoverWidget.border": "#303030",
  "editorIndentGuide.activeBackground": COLORS.keywords,
  "editorIndentGuide.background": "#303030",
  "editorLineNumber.activeForeground": "#808080",
  "editorLineNumber.foreground": "#505050",
  "editorWidget.background": COLORS.surfaces,
  "editorWidget.resizeBorder": COLORS.white,
}

/* INPUT
 *****************************************************************/
const INPUT = {
  "input.background": "#30303091",
}

/* INPUT
 *****************************************************************/
const LIST = {
  "list.activeSelectionBackground": COLORS.surfaces,
  "list.dropBackground": COLORS.backgrounds,
  "list.focusBackground": COLORS.backgrounds,
  "list.highlightForeground": COLORS.white,
  "list.hoverBackground": COLORS.backgrounds,
  "list.inactiveSelectionBackground": COLORS.surfaces,
}

/* LIST_FILTER_WIDGET
 *****************************************************************/
const LIST_FILTER_WIDGET = {
  "listFilterWidget.background": COLORS.backgrounds,
}

/* NOTIFICATIONS
 *****************************************************************/
const NOTIFICATIONS = {
  "notifications.border": COLORS.surfaces,
}

/* PANEL
 *****************************************************************/
const PANEL = {
  "panel.border": COLORS.surfaces,
}

/* PEEK_VIEW
 *****************************************************************/
const PEEK_VIEW = {
  "peekView.border": COLORS.white,
  "peekViewTitle.background": COLORS.backgrounds,
}

/* SCROLLBAR
 *****************************************************************/
const SCROLLBAR = {
  "scrollbar.shadow": COLORS.backgrounds,
  "scrollbarSlider.activeBackground": "#303030",
  "scrollbarSlider.background": "#303030",
  "scrollbarSlider.hoverBackground": "#404040",
}

/* SELECTION
 *****************************************************************/
const SELECTION = {
  "selection.background": "#f7a0d336",
}

/* SIDE_BAR
 *****************************************************************/
const SIDE_BAR = {
  "sideBar.background": COLORS.backgrounds,
  "sideBar.border": COLORS.surfaces,
}

/* SIDE_BAR_SECTION_HEADER
 *****************************************************************/
const SIDE_BAR_SECTION_HEADER = {
  "sideBarSectionHeader.background": COLORS.backgrounds,
  "sideBarSectionHeader.border": COLORS.surfaces,
}

/* STATUS_BAR
 *****************************************************************/
const STATUS_BAR = {
  "statusBar.background": COLORS.backgrounds,
  "statusBar.border": COLORS.surfaces,
  "statusBar.debuggingBackground": COLORS.backgrounds,
  "statusBar.noFolderBackground": COLORS.backgrounds,
}

/* STATUS_BAR_ITEM
 *****************************************************************/
const STATUS_BAR_ITEM = {
  "statusBarItem.remoteBackground": COLORS.entity_names,
}

/* TAB
 *****************************************************************/
const TAB = {
  "tab.activeBackground": COLORS.backgrounds,
  "tab.activeBorder": COLORS.backgrounds,
  "tab.activeBorderTop": COLORS.white,
  "tab.activeForeground": COLORS.white,
  "tab.border": COLORS.surfaces,
  "tab.inactiveBackground": COLORS.backgrounds,
  "tab.inactiveBorder": COLORS.surfaces,
  "tab.inactiveForeground": COLORS.strings,
  "tab.unfocusedActiveBorder": COLORS.surfaces,
  "tab.unfocusedActiveBorderTop": COLORS.surfaces,
}

/* EDITOR_SUGGEST_WIDGET
 *****************************************************************/
const EDITOR_SUGGEST_WIDGET = {
  "editorSuggestWidget.selectedBackground": "#f7a0d336",
}

/* TERMINAL
 *****************************************************************/
const TERMINAL = {
  "terminal.border": COLORS.surfaces,
}

/* TEXT_LINK
 *****************************************************************/
const TEXT_LINK = {
  "textLink.activeForeground": COLORS.variables,
  "textLink.foreground": COLORS.entity_names,
}

/* TITLE_BAR
 *****************************************************************/
const TITLE_BAR = {
  "titleBar.activeBackground": COLORS.backgrounds,
  "titleBar.activeForeground": "#e2eaf5",
  "titleBar.border": COLORS.surfaces,
  "titleBar.inactiveBackground": "#202020",
  "titleBar.inactiveForeground": "#80878e",
}

/* THREE
 *****************************************************************/
const THREE = {
  "tree.indentGuidesStroke": "#303030",
}

/* WIDGET
 *****************************************************************/
const WIDGET = {
  "widget.shadow": COLORS.backgrounds,
}

/* TOKEN_COLORS
 *****************************************************************/
const TOKEN_COLORS = [
  {
    scope: ["comment", "punctuation.definition.comment", "string.comment"],
    settings: {
      foreground: "#808080",
    },
  },
  {
    scope: [
      "constant",
      "entity.name.constant",
      "variable.other.constant",
      "variable.other.enummember",
      "variable.language",
      "entity",
    ],
    settings: {
      foreground: COLORS.variables,
    },
  },
  {
    scope: ["entity.name", "meta..default", "meta.definition.variable"],
    settings: {
      foreground: COLORS.entity_names,
    },
  },
  {
    scope: [
      "variable.parameter.function",
      "meta.jsx.children",
      "meta.block",
      "meta.tag.attributes",
      "entity.name.constant",
      "meta.object.member",
      "meta.embedded.expression",
    ],
    settings: {
      foreground: "#c9d1d9",
    },
  },
  {
    scope: "entity.name.function",
    settings: {
      foreground: COLORS.functions,
    },
  },
  {
    scope: ["entity.name.tag", "support.class.component"],
    settings: {
      foreground: COLORS.tags,
    },
  },
  {
    scope: "keyword",
    settings: {
      foreground: COLORS.keywords,
    },
  },
  {
    scope: ["storage", "storage.type"],
    settings: {
      foreground: COLORS.keywords,
    },
  },
  {
    scope: [
      "storage.modifier.package",
      "storage.modifier.import",
      "storage.type.java",
    ],
    settings: {
      foreground: "#c9d1d9",
    },
  },
  {
    scope: ["string", "string punctuation.section.embedded source"],
    settings: {
      foreground: COLORS.strings,
    },
  },
  {
    scope: "support",
    settings: {
      foreground: COLORS.variables,
    },
  },
  {
    scope: "meta.property-name",
    settings: {
      foreground: COLORS.variables,
    },
  },
  {
    scope: "variable",
    settings: {
      foreground: COLORS.entity_names,
    },
  },
  {
    scope: "variable.other",
    settings: {
      foreground: "#c9d1d9",
    },
  },
  {
    scope: "invalid.broken",
    settings: {
      fontStyle: "italic",
      foreground: "#ffa198",
    },
  },
  {
    scope: "invalid.deprecated",
    settings: {
      fontStyle: "italic",
      foreground: "#ffa198",
    },
  },
  {
    scope: "invalid.illegal",
    settings: {
      fontStyle: "italic",
      foreground: "#ffa198",
    },
  },
  {
    scope: "invalid.unimplemented",
    settings: {
      fontStyle: "italic",
      foreground: "#ffa198",
    },
  },
  {
    scope: "carriage-return",
    settings: {
      fontStyle: "italic underline",
      background: COLORS.keywords,
      foreground: "#f0f6fc",
      content: "^M",
    },
  },
  {
    scope: "message.error",
    settings: {
      foreground: "#ffa198",
    },
  },
  {
    scope: "string variable",
    settings: {
      foreground: COLORS.variables,
    },
  },
  {
    scope: ["source.regexp", "string.regexp"],
    settings: {
      foreground: COLORS.strings,
    },
  },
  {
    scope: [
      "string.regexp.character-class",
      "string.regexp constant.character.escape",
      "string.regexp source.ruby.embedded",
      "string.regexp string.regexp.arbitrary-repitition",
    ],
    settings: {
      foreground: COLORS.strings,
    },
  },
  {
    scope: "string.regexp constant.character.escape",
    settings: {
      foreground: COLORS.tags,
    },
  },
  {
    scope: "support.constant",
    settings: {
      foreground: COLORS.variables,
    },
  },
  {
    scope: "support.variable",
    settings: {
      foreground: COLORS.variables,
    },
  },
  {
    scope: "support.type.property-name.json",
    settings: {
      foreground: COLORS.tags,
    },
  },
  {
    scope: "meta.module-reference",
    settings: {
      foreground: COLORS.variables,
    },
  },
  {
    scope: "punctuation.definition.list.begin.markdown",
    settings: {
      foreground: COLORS.entity_names,
    },
  },
  {
    scope: ["markup.heading", "markup.heading entity.name"],
    settings: {
      foreground: COLORS.variables,
    },
  },
  {
    scope: "markup.quote",
    settings: {
      foreground: COLORS.tags,
    },
  },
  {
    scope: "markup.italic",
    settings: {
      fontStyle: "italic",
      foreground: "#c9d1d9",
    },
  },
  {
    scope: "markup.bold",
    settings: {
      fontStyle: "bold",
      foreground: "#c9d1d9",
    },
  },
  {
    scope: ["markup.underline"],
    settings: {
      fontStyle: "underline",
    },
  },
  {
    scope: ["markup.strikethrough"],
    settings: {
      fontStyle: "strikethrough",
    },
  },
  {
    scope: "markup.inline.raw",
    settings: {
      foreground: COLORS.variables,
    },
  },
  {
    scope: [
      "markup.deleted",
      "meta.diff.header.from-file",
      "punctuation.definition.deleted",
    ],
    settings: {
      background: "#490202",
      foreground: "#ffa198",
    },
  },
  {
    scope: ["punctuation.section.embedded"],
    settings: {
      foreground: COLORS.keywords,
    },
  },
  {
    scope: [
      "markup.inserted",
      "meta.diff.header.to-file",
      "punctuation.definition.inserted",
    ],
    settings: {
      background: "#04260f",
      foreground: "#ffad55",
    },
  },
  {
    scope: ["markup.changed", "punctuation.definition.changed"],
    settings: {
      background: "#5a1e02",
      foreground: COLORS.entity_names,
    },
  },
  {
    scope: ["markup.ignored", "markup.untracked"],
    settings: {
      foreground: "#161b22",
      background: COLORS.variables,
    },
  },
  {
    scope: "meta.diff.range",
    settings: {
      foreground: COLORS.functions,
    },
  },
  {
    scope: "meta.diff.header",
    settings: {
      foreground: COLORS.variables,
    },
  },
  {
    scope: "meta.separator",
    settings: {
      foreground: COLORS.variables,
    },
  },
  {
    scope: "meta.output",
    settings: {
      foreground: COLORS.variables,
    },
  },
  {
    scope: [
      "brackethighlighter.tag",
      "brackethighlighter.curly",
      "brackethighlighter.round",
      "brackethighlighter.square",
      "brackethighlighter.angle",
      "brackethighlighter.quote",
    ],
    settings: {
      foreground: "#808080",
    },
  },
  {
    scope: "brackethighlighter.unmatched",
    settings: {
      foreground: "#ffa198",
    },
  },
  {
    scope: ["constant.other.reference.link", "string.other.link"],
    settings: {
      foreground: COLORS.strings,
      fontStyle: "underline",
    },
  },
]

/* FLAME_APP_STUDIO_THEME
 *****************************************************************/
export const FLAME_APP_STUDIO_THEME: ThemeColors = {
  name: CONFIG.name,
  type: CONFIG.type,
  colors: {
    ...COMMONS,
    ...ACTIVITY_BAR,
    ...BADGE,
    ...BUTTON,
    ...DEBUG_TOOLBAR,
    ...DIFF_EDITOR,
    ...EDITOR,
    ...INPUT,
    ...LIST,
    ...LIST_FILTER_WIDGET,
    ...NOTIFICATIONS,
    ...PANEL,
    ...PEEK_VIEW,
    ...SCROLLBAR,
    ...SELECTION,
    ...SIDE_BAR,
    ...SIDE_BAR_SECTION_HEADER,
    ...STATUS_BAR,
    ...STATUS_BAR_ITEM,
    ...TAB,
    ...EDITOR_SUGGEST_WIDGET,
    ...TERMINAL,
    ...TEXT_LINK,
    ...TITLE_BAR,
    ...THREE,
    ...WIDGET,
  },
  semanticHighlighting: CONFIG.semanticHighlighting,
  tokenColors: TOKEN_COLORS,
}
