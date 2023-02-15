import { Link } from 'react-router-dom';
import { createRef, FC, RefObject, useContext } from 'react';

import classNames from 'classnames';

import avatar from './images/avatar.png';
import logo from './images/logo.svg';
import { mock } from './mock/mock';

import classes from './header.module.scss';
import { useAppDispatch, useAppState } from '../../context';

export const dropDownHeaderRef: RefObject<any> = createRef();
export const Header: FC = () => {
    const { user, headerTitle } = mock();
    const { isMenuOpen } = useAppState();
    const dispatch = useAppDispatch();

    const toggleMenu = () => {
        dispatch({
            type: 'SET_MENU_OPEN',
            payload: !isMenuOpen,
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
                    [classes.burgerContainerChecked]: isMenuOpen,
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
