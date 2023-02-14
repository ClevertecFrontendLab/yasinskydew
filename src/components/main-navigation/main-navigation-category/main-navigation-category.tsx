import { FC } from 'react';
import { Link } from 'react-router-dom';

import classes from './main-navigation-category.module.scss';
import {ICategory} from "../../../models/ICategory";
export interface MainNavigationCategoryProps {
  category: ICategory;
  searchCategory?: string | null;
  disableMenu: () => void;
}

export const MainNavigationCategory: FC<MainNavigationCategoryProps> = ({ category, disableMenu, searchCategory }) => {
    return (
    <li
      key={category.id}
      className={searchCategory === String(category.path) ? classes.navBookItemActive : classes.bookNavItem}
    >
      <Link
        to={{
          search: `?categoryId=${category.path}`,
        }}
        onClick={disableMenu}
      >
        {category.name}
        <span className={classes.bookNavItemCount}>{1}</span>
      </Link>
    </li>
  );
};
