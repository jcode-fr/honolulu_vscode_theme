export interface TokenColorSetting {
  foreground: string
  fontStyle?: string
}

export interface TokenColor {
  scope: string | string[]
  settings: {
    foreground?: string
    fontStyle?: string
    background?: string
    content?: string
  }
}

export interface VSCodeColors {
  [key: string]: string
}

export interface ThemeMetaData {
  name: string
  type: "dark" | "light"
  semanticHighlighting: boolean
}

export interface ThemeColors extends ThemeMetaData {
  name: string
  type: "dark" | "light"
  colors: VSCodeColors
  tokenColors: TokenColor[]
}

export interface Config extends ThemeMetaData {
  extentionFileName: string
  themePath: string
  icon: string
}

export interface Colors {
  backgrounds: string
  surfaces: string
  functions: string
  tags: string
  strings: string
  keywords: string
  variables: string
  entity_names: string
  white: string
}
