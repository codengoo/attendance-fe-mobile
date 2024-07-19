import { Appearance } from "react-native";
import { selectTheme, setTheme } from "../store/slices";
import { EBaseTheme, ETheme } from "../types";
import { useAppDispatch, useAppSelector } from "./reduxHook";
import { useCallback, useEffect, useState } from "react";
import { Colors } from "../constants/colors";

export default function useTheme(theme?: ETheme) {
    const remoteTheme = useAppSelector(selectTheme);
    const deviceTheme = Appearance.getColorScheme();
    const dispatch = useAppDispatch();
    
    const parseTheme = useCallback(() => {
        const deviceBaseTheme = (deviceTheme === "dark" ? ETheme.Dark : ETheme.Light);
        
        const t: EBaseTheme = theme
        ? theme === ETheme.Auto
        ? deviceBaseTheme
        : theme
        : remoteTheme === ETheme.Auto
        ? deviceBaseTheme
        : remoteTheme;
        
        return t;
    }, [])
    
    const [_theme, _setTheme] = useState<EBaseTheme>(parseTheme());
    
    useEffect(() => {
        _setTheme(parseTheme())
    }, [remoteTheme, deviceTheme, theme])

    return {
        theme: theme ? theme : remoteTheme,
        baseTheme: _theme,
        setTheme: (newTheme: ETheme) => {
            _setTheme(parseTheme());
            dispatch(setTheme(newTheme));
        },
        themeValue: Colors[_theme]
    }
}