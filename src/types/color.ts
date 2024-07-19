import { EBaseTheme } from "./app"

export type HexColor = `#${string}`

export type Attribute = {
    primary: HexColor,
    secondary: HexColor,
    tertiary: HexColor
}

export type ThemeColor = Record<EBaseTheme, Attribute>