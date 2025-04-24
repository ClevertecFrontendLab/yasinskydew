import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { ApplicationState } from '../configure-store';

export const useAppDispatch = () => useDispatch();
export const useAppSelector: TypedUseSelectorHook<ApplicationState> = useSelector;
