export enum ETheme {
    Dark = "dark",
    Light = "light",
    Auto = "auto",
}

export enum ELanguage {
    Vi = "vi",
    En = "en",
}

export interface IAppConfig {
    theme: ETheme;
    language: ELanguage;
}