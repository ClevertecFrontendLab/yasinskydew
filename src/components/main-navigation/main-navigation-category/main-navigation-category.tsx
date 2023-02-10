import { FC } from 'react';
import { Link } from 'react-router-dom';

import classes from './main-navigation-category.module.scss';
import { NavItemInterface } from '../main-navigation';
export interface MainNavigationCategoryProps {
  category: NavItemInterface;
  searchCategory?: string | null;
  disableMenu: () => void;
}

export const MainNavigationCategory: FC<MainNavigationCategoryProps> = ({ category, disableMenu, searchCategory }) => {
  return (
    <li
      key={category.id}
      className={searchCategory === String(category.id) ? classes.navBookItemActive : classes.bookNavItem}
    >
      <Link
        to={{
          search: `?categoryId=${category.id}`,
        }}
        onClick={disableMenu}
      >
        {category.title}
        <span className={classes.bookNavItemCount}>{category.count}</span>
      </Link>
    </li>
  );
};
