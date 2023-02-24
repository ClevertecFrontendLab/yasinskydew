import { SortEnum } from '../hooks/useBooks';

export interface BreadCrumbsI {
    path: string,
    label: string,
}
export interface AppState {
    isMenuOpen: boolean;
    breadCrumbsPath: BreadCrumbsI[];
    sort: SortEnum;
    sortDirection: boolean;
    query: string;
    category: string;
}

export type Action =
    | { type: 'SET_MENU_OPEN'; payload: boolean }
    | { type: 'SET_BREAD_CRUMBS'; payload: BreadCrumbsI[] }
    | { type: 'SET_SORT'; payload: SortEnum }
    | { type: 'SET_SORT_DIRECTION'; payload: boolean }
    | { type: 'SET_SEARCH_QUERY'; payload: string }
    | { type: 'SET_FILTER_CATEGORY'; payload: string };

export const initialState: AppState = {
    isMenuOpen: false,
    breadCrumbsPath: [{
        path: 'all',
        label: 'Все книги',
    }],
    sort: SortEnum.rating,
    sortDirection: false,
    query: '',
    category: '',
};

export function reducer(state: AppState, action: Action): AppState {
    switch (action.type) {
        case 'SET_MENU_OPEN':
            return {
                ...state,
                isMenuOpen: action.payload,
            };
        case 'SET_BREAD_CRUMBS':
            return {
                ...state,
                breadCrumbsPath: action.payload,
            };
        case 'SET_SORT':
            return {
                ...state,
                sort: action.payload,
            };
        case 'SET_SORT_DIRECTION':
            return {
                ...state,
                sortDirection: action.payload,
            };
        case 'SET_SEARCH_QUERY':
            return {
                ...state,
                query: action.payload,
            };
        case 'SET_FILTER_CATEGORY':
            return {
                ...state,
                category: action.payload,
            };
        default:
            throw new Error();
    }
}
