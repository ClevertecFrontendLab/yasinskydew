export interface AppState {
    isMenuOpen: boolean;
    breadCrumbsPath: string[];
}

export type Action =
    | { type: 'SET_MENU_OPEN', payload: boolean }
    | { type: "SET_BREAD_CRUMBS", payload: string[] }

export const initialState: AppState = {
    isMenuOpen: false,
    breadCrumbsPath: ['Все книги'],
};

export function reducer(state: AppState, action: Action): AppState {
    switch (action.type) {
        case "SET_MENU_OPEN":
            return {
                ...state,
                isMenuOpen: action.payload
            };
        case "SET_BREAD_CRUMBS":
            return {
                ...state,
                breadCrumbsPath: action.payload
            };
        default:
            throw new Error();
    }
}
