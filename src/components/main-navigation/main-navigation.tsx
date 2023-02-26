import { createRef, FC, RefObject, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { getPagesMock } from './mock-data';
import classes from './main-navigation.module.scss';
import useOnClickOutside from '../../hooks/on-click-outside';
import { dropDownHeaderRef } from '../../pages/header/header';
import { MainNavigationPage } from './main-navigation-page/main-navigation-page';
import { MainNavigationCategory } from './main-navigation-category/main-navigation-category';
import { ICategory } from '../../models/ICategory';
import { useAppDispatch, useAppState } from '../../context';

export interface MainNavigationProps {
    navDisplayNone?: boolean;
    categories: ICategory[];
}

export const dropDownRef: RefObject<HTMLDivElement> = createRef();

export const MainNavigation: FC<MainNavigationProps> = ({ categories = [], navDisplayNone = false }) => {
    const { isMenuOpen } = useAppState();
    const dispatch = useAppDispatch();
    const clearCategory = () => {
        dispatch({ type: 'SET_FILTER_CATEGORY', payload: '' });
        dispatch({
            type: 'SET_BREAD_CRUMBS',
            payload: [
                {
                    path: 'all',
                    label: 'Все книги',
                },
            ],
        });
    };
    const pages = getPagesMock();
    const location = useLocation();
    const [isCategoriesOpen, setIsCategoriesOpen] = useState<boolean>(true);
    const [isArrowVisible, setIsArrowVisible] = useState<boolean>(true);

    const disableMenu = () => {
        if (isMenuOpen) {
            dispatch({
                type: 'SET_MENU_OPEN',
                payload: false,
            });
        }
    };

    const disableBookNavList = () => setIsCategoriesOpen(false);
    const toggleBookNavList = () => setIsCategoriesOpen(!isCategoriesOpen);

    const setArrow = (toggleVisible: boolean) => setIsArrowVisible(toggleVisible);

    useOnClickOutside([dropDownRef, dropDownHeaderRef], () => {
        if (isMenuOpen) {
            dispatch({
                type: 'SET_MENU_OPEN',
                payload: false,
            });
        }
    });

    return (
        <nav
            ref={dropDownRef}
            className={classNames(classes.nav, {
                [classes.navDisplayNone]: navDisplayNone,
                [classes.navDisabled]: !isMenuOpen,
            })}
            data-test-id='burger-navigation'
        >
            <ul className={classes.navList}>
                <li className={classes.navItem}>
                    <div className={classes.navBookItemWrapper}>
                        <NavLink
                            to='/books/all'
                            onClick={() => {
                                setArrow(true);
                                toggleBookNavList();
                            }}
                            className={classNames({
                                [classes.navItemActive]:
                                    location.pathname === '/' || location.pathname.includes('/books/'),
                            })}
                            data-test-id='navigation-showcase'
                        >
                            <h3 data-test-id='burger-showcase' className={classes.bookNavListTitle}>
                                Витрина книг
                            </h3>
                        </NavLink>
                        <div
                            className={classNames(classes.bookNavListButton, {
                                [classes.bookNavListButtonVisible]: isCategoriesOpen,
                                [classes.bookNavListToggleVisible]: isArrowVisible,
                            })}
                        />
                    </div>
                    {
                        <ul
                            className={classNames(classes.bookNavList, {
                                [classes.bookNavListClose]: !isCategoriesOpen,
                            })}
                        >
                            <li data-test-id='navigation-books'>
                                <NavLink
                                    to='/books/all'
                                    className={
                                        location.pathname === '/' || location.pathname === '/books/all'
                                            ? classes.navBookItemActive
                                            : classes.bookNavItem
                                    }
                                    data-test-id='burger-books'
                                    onClick={() => {
                                        disableMenu();
                                        clearCategory();
                                    }}
                                >
                                    Все книги
                                </NavLink>
                            </li>
                            {categories.map((item: ICategory, index) => (
                                <MainNavigationCategory key={index} category={item} disableMenu={disableMenu} />
                            ))}
                        </ul>
                    }
                </li>
                {pages.map((item, index) => (
                    <MainNavigationPage
                        key={index}
                        id={index}
                        disableMenu={disableMenu}
                        setArrow={setArrow}
                        disableBookNavList={disableBookNavList}
                        hide={item.hide}
                        title={item.title}
                        divider={item.divider}
                        path={item.path}
                        dataTestId={item.dataTestId}
                        dataTestBurgerId={item.dataTestBurgerId}
                    />
                ))}
            </ul>
        </nav>
    );
};
