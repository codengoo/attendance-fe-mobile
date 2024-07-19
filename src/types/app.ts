export enum ETheme {
    Dark = "dark",
    Light = "light",
    Auto = "auto",
}

export type EBaseTheme = ETheme.Dark | ETheme.Light

export enum ELanguage {
    Vi = "vi",
    En = "en",
}

export interface IAppConfig {
    theme: ETheme;
    language: ELanguage;
}