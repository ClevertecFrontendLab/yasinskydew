import { createRef, FC, RefObject, useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import classNames from 'classnames';

import { getPagesMock } from './mock-data';
import classes from './main-navigation.module.scss';
import useOnClickOutside from '../../hooks/on-click-outside';
import { dropDownHeaderRef } from '../../pages/header/header';
import { LayoutState } from '../../layouts/main/main';
import {MainNavigationPage} from "./main-navigation-page/main-navigation-page";
import {MainNavigationCategory} from "./main-navigation-category/main-navigation-category";
import {ICategory} from "../../models/ICategory";
import {categoryAPI} from "../../services/category-service";
import {Loader} from "../ui/loader/loader";
import Error from "../ui/error/error";

export interface NavItemInterface {
  id: number;
  count: number;
  title: string;
  href: string;
}
export interface MainNavigationProps {
  items?: NavItemInterface[];
  navDisplayNone?: boolean;
  layoutState: LayoutState;
  setLayoutState: (state: LayoutState) => void;
}

export const dropDownRef: RefObject<HTMLDivElement> = createRef();

export const MainNavigation: FC<MainNavigationProps> = ({ layoutState, setLayoutState, navDisplayNone = false }) => {
  const {data: categories = [], error, isLoading} =  categoryAPI.useFetchAllCategoriesQuery();

  const pages = getPagesMock();
  const [search] = useSearchParams();
  const location = useLocation();

  const [isCategoriesOpen, setIsCategoriesOpen] = useState<boolean>(true);
  const [isArrowVisible, setIsArrowVisible] = useState<boolean>(true);

  const disableMenu = () => {
    if (layoutState.isMenuOpen) {
      setLayoutState({
        ...layoutState,
        isMenuOpen: false,
      });
    }
  };

  const disableBookNavList = () => setIsCategoriesOpen(false);
  const toggleBookNavList = () => setIsCategoriesOpen(!isCategoriesOpen);

  const setArrow = (toggleVisible: boolean) => setIsArrowVisible(toggleVisible);

  useOnClickOutside([dropDownRef, dropDownHeaderRef], () => {
    if (layoutState.isMenuOpen) {
      setLayoutState({
        ...layoutState,
        isMenuOpen: false,
      });
    }
  });

  return (
    <nav
      ref={dropDownRef}
      className={classNames(classes.nav, {
        [classes.navDisplayNone]: navDisplayNone,
        [classes.navDisabled]: !layoutState.isMenuOpen,
      })}
      data-test-id='burger-navigation'
    >
      <ul className={classes.navList}>
        <li className={classes.navItem}>
          <div className={classes.navBookItemWrapper}>
            <NavLink
              to='/'
              onClick={() => {
                setArrow(true);
                toggleBookNavList();
              }}
              className={({ isActive }) => (isActive ? classes.navItemActive : undefined)}
              data-test-id='navigation-showcase'
            >
              <h3
                  data-test-id='burger-showcase'
                  className={classes.bookNavListTitle}>Витрина книг</h3>
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
                  to='/'
                  className={
                    location.pathname === '/' && location.search === ''
                      ? classes.navBookItemActive
                      : classes.bookNavItem
                  }
                  data-test-id='burger-books'
                  onClick={disableMenu}
                >
                  Все книги
                </NavLink>
              </li>
              {categories.map((item: ICategory, index) => <MainNavigationCategory
                  key={index}
                  category={item}
                  disableMenu={disableMenu}
                  searchCategory={search.get('categoryId') || null}
              />)}
            </ul>
          }
        </li>
        { isLoading && <Loader/> }
        { error && <Error error={'Category error'} /> }
        {pages.map((item, index) => <MainNavigationPage
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
        )}
      </ul>
    </nav>
  );
};
