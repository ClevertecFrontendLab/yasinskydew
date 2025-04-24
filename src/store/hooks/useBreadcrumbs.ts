import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router';

import {
    addBreadcrumb,
    removeLastBreadcrumb,
    resetBreadcrumbs,
    setBreadcrumbs,
} from '../breadcrumb-slice';
import { BreadcrumbItem } from '../breadcrumb-slice';
import { useAppDispatch, useAppSelector } from './useApp';

interface UseBreadcrumbsReturn {
    breadcrumbs: BreadcrumbItem[];
    addBreadcrumbItem: (item: BreadcrumbItem) => void;
    removeLastBreadcrumbItem: () => void;
    resetBreadcrumbItems: () => void;
    setBreadcrumbItems: (items: BreadcrumbItem[]) => void;
    navigateWithBreadcrumb: (path: string, label: string) => void;
    goBack: () => void;
    getCurrentBreadcrumb: () => BreadcrumbItem | undefined;
    isCurrentPage: (path: string) => boolean;
}

export const useBreadcrumbs = (): UseBreadcrumbsReturn => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const breadcrumbs = useAppSelector((state) => state.breadcrumb.items);

    const addBreadcrumbItem = useCallback(
        (item: BreadcrumbItem) => {
            dispatch(addBreadcrumb(item));
        },
        [dispatch],
    );

    const removeLastBreadcrumbItem = useCallback(() => {
        dispatch(removeLastBreadcrumb());
    }, [dispatch]);

    const resetBreadcrumbItems = useCallback(() => {
        dispatch(resetBreadcrumbs());
    }, [dispatch]);

    const setBreadcrumbItems = useCallback(
        (items: BreadcrumbItem[]) => {
            dispatch(setBreadcrumbs(items));
        },
        [dispatch],
    );

    const navigateWithBreadcrumb = useCallback(
        (path: string, label: string) => {
            navigate(path);
            addBreadcrumbItem({ path, label });
        },
        [navigate, addBreadcrumbItem],
    );

    const goBack = useCallback(() => {
        if (breadcrumbs.length > 1) {
            const previousPath = breadcrumbs[breadcrumbs.length - 2].path;
            removeLastBreadcrumbItem();
            navigate(previousPath);
        }
    }, [breadcrumbs, navigate, removeLastBreadcrumbItem]);

    const getCurrentBreadcrumb = useCallback(
        () => breadcrumbs[breadcrumbs.length - 1],
        [breadcrumbs],
    );

    const isCurrentPage = useCallback(
        (path: string) => location.pathname === path,
        [location.pathname],
    );

    return {
        breadcrumbs,
        addBreadcrumbItem,
        removeLastBreadcrumbItem,
        resetBreadcrumbItems,
        setBreadcrumbItems,
        navigateWithBreadcrumb,
        goBack,
        getCurrentBreadcrumb,
        isCurrentPage,
    };
};
