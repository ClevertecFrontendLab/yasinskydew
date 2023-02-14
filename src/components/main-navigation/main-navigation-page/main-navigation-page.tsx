import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import classes from './main-navigation-page.module.scss';
export interface MainNavigationPageProps {
  id: number;
  title?: string;
  hide?: boolean;
  divider?: boolean;
  path?: string;
  dataTestId?: string;
  dataTestBurgerId?: string;
  disableMenu: () => void;
  setArrow: (value: boolean) => void;
  disableBookNavList: () => void;
}

export const MainNavigationPage: FC<MainNavigationPageProps> = ({
  id,
  title,
  hide,
  divider,
  path,
  dataTestId,
  dataTestBurgerId,
  disableMenu,
  setArrow,
  disableBookNavList,
}) => {
  if (divider) {
    return (
      <li
        key={id}
        className={classNames(classes.navItemDivider, {
          [classes.navItemHide]: hide,
        })}
      ></li>
    );
  }
  return (
    <li
      key={id}
      onClick={() => {
        disableMenu();
        setArrow(false);
        disableBookNavList();
      }}
      className={classNames({
        [classes.navItemHide]: hide,
      })}
      data-test-id={dataTestId}
    >
      {path ? (
        <NavLink
          to={path}
          className={({ isActive }) => (isActive ? classes.navItemActive : undefined)}
          data-test-id={dataTestBurgerId}
        >
          {title}
        </NavLink>
      ) : (
        <span style={{ cursor: 'pointer' }}>{title}</span>
      )}
    </li>
  );
};
