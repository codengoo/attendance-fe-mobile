import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ELanguage, ETheme, IAppConfig } from '../../types'
import { RootState } from '..';
import { EStorageKey, getStorage } from '../storage';

const initialState: IAppConfig = {
    theme: ETheme.Auto,
    language: ELanguage.Vi,
}

const localState = getStorage<IAppConfig>(EStorageKey.AppConfig);

export const appSlice = createSlice({
    name: 'app',
    initialState: localState || initialState,
    reducers: {
        setAppConfig: (state, action: PayloadAction<IAppConfig>) => {
            state.language = action.payload.language;
            state.theme = action.payload.theme;
        }
    }
})

export const { setAppConfig } = appSlice.actions;

export const selectTheme = (state: RootState) => state.app.theme;
export const selectLanguage = (state: RootState) => state.app.language;

export default appSlice.reducer;