import { GlobalActions, GlobalContextType, GlobalStateType } from '/types/GlobalState';
import { createContext, FC, useContext, useEffect, useMemo, useReducer } from 'react';
import { GlobalReducer } from './reducer';

const initialState: GlobalStateType = {
    user: null,
    isLogged: false,
    theme: 'dark',
};

const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

const GlobalProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(GlobalReducer, initialState);

    const contextValue = useMemo(() => {
        return { state, dispatch };
    }, [state]);

    useEffect(() => {
        const localState = localStorage.getItem('chatify-state');
        if (localState) {
            const parsedLocalState = JSON.parse(localState) as GlobalStateType;
            dispatch({
                type: GlobalActions.INIT_STATE,
                payload: parsedLocalState,
            });
        }
    }, []);

    useEffect(() => {
        if (state !== initialState) {
            localStorage.setItem('chatify-state', JSON.stringify(state));
        }
    }, [state]);

    return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};

export const useGlobalState = () => useContext(GlobalContext);

export default GlobalProvider;
