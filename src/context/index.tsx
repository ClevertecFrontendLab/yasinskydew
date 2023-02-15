import { createContext, FC, ReactNode, useContext, useMemo, useReducer } from 'react';
import { Action, AppState, initialState, reducer } from './reducer';
import { Dispatch } from 'react';

type StateContextType = { state: AppState; dispatch: Dispatch<Action> };

export const StateContext = createContext<StateContextType>({} as StateContextType);

export const useAppState = (): AppState => useContext(StateContext).state;
export const useAppDispatch = (): Dispatch<Action> => useContext(StateContext).dispatch;

export const initialPrepopulatedState = Object.entries(initialState).reduce(
    (acc, [key, value]) => ({
        ...acc,
        [key]: value,
    }),
    {}
) as AppState;

interface AppStateProviderProps {
    children: ReactNode;
}
export const AppStateProvider: FC<AppStateProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialPrepopulatedState);

    const contextValue = useMemo(() => {
        return { state, dispatch };
    }, [state, dispatch]);

    return <StateContext.Provider value={contextValue}>{children}</StateContext.Provider>;
};
