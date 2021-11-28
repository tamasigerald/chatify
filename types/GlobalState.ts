import { Dispatch } from 'react';

export type GlobalContextType = {
    state: GlobalStateType;
    dispatch: Dispatch<GlobalActionsType>;
};

export type GlobalStateType = {
    user: LoggedUserType | null;
    isLogged: boolean;
    theme: ThemeType;
};

export type ThemeType = 'light' | 'dark';

export type LoggedUserType = {
    username: string;
    token: string;
};

export enum GlobalActions {
    'SET_THEME',
    'SET_LOGGED',
    'INIT_STATE',
}

export type GlobalActionsType =
    | { type: GlobalActions.SET_THEME; payload: ThemeType }
    | { type: GlobalActions.SET_LOGGED; payload: LoggedUserType }
    | { type: GlobalActions.INIT_STATE; payload: GlobalStateType };
