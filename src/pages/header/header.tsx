import { Link } from 'react-router-dom';
import { createRef, FC, RefObject } from 'react';

import classNames from 'classnames';

import avatar from './images/avatar.png';
import logo from './images/logo.svg';
import { mock } from './mock/mock';

import classes from './header.module.scss';
import {LayoutState} from "../../layouts/main/main";

interface HeaderProps {
  layoutState: LayoutState;
  setLayoutState: (state: LayoutState) => void;
}
export const dropDownHeaderRef: RefObject<any> = createRef();
export const Header: FC<HeaderProps> = ({ layoutState, setLayoutState }) => {
  const { user, headerTitle } = mock();

  const toggleMenu = () => {
    setLayoutState({
      ...layoutState,
      isMenuOpen: !layoutState.isMenuOpen,
    });
  };
  return (
    <header className={[classes.header].join(' ')}>
      <Link to='/'>
        <img src={logo} className={classes.logo} alt='logo' />
      </Link>
      <div
        data-test-id='button-burger'
        className={classNames(classes.burgerContainer, {
          [classes.burgerContainerChecked]: layoutState.isMenuOpen,
        })}
        ref={dropDownHeaderRef}
        onClick={toggleMenu}
      >
        <span />
      </div>
      <h2 className={classes.title}>{headerTitle}</h2>
      <div className={classes.account}>
        <p className={classes.accountGreeting}>Привет, {user.name}!</p>
        <img className={classes.accountAvatar} src={avatar} alt='User avatar' />
      </div>
    </header>
  );
};
