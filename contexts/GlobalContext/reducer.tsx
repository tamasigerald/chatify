import { GlobalActions, GlobalActionsType, GlobalStateType } from '/types/GlobalState';

export const GlobalReducer = (state: GlobalStateType, action: GlobalActionsType): GlobalStateType => {
    switch (action.type) {
        case GlobalActions.SET_THEME:
            action;
            return { ...state, theme: action.payload };
        case GlobalActions.SET_LOGGED:
            action;
            return { ...state, isLogged: true, user: action.payload };
        default:
            return state;
    }
};
