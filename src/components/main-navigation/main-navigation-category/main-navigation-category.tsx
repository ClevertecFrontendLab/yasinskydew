import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import classes from './main-navigation-category.module.scss';
import { ICategory } from '../../../models/ICategory';
import { useAppDispatch } from '../../../context';
import classNames from 'classnames';
export interface MainNavigationCategoryProps {
    category: ICategory;
    disableMenu: () => void;
}

export const MainNavigationCategory: FC<MainNavigationCategoryProps> = ({ category, disableMenu }) => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const path = `/books/${category.path}`;
    const setCategory = () => {
        dispatch({ type: 'SET_FILTER_CATEGORY', payload: category.name });
        dispatch({
            type: 'SET_BREAD_CRUMBS',
            payload: [
                {
                    path: category.path,
                    label: category.name,
                },
            ],
        });
    };
    return (
        <li
            key={category.id}
            className={classNames(classes.bookNavItem, {
                [classes.navBookItemActive]: location.pathname === path,
            })}
        >
            <Link
                to={path}
                onClick={() => {
                    disableMenu();
                    setCategory();
                }}
            >
                {category.name}
                <span className={classes.bookNavItemCount}>{1}</span>
            </Link>
        </li>
    );
};
