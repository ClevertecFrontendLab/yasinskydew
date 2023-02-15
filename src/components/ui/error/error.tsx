import { FC } from 'react';
import classes from './error.module.scss';
import classNames from 'classnames';
import errorIcon from './images/error_icon.svg';
import errorDisabled from './images/error_disabled.svg';

interface ErrorProps {
    error: string;
}
const Error: FC<ErrorProps> = ({ error }) => {
    return (
        <div data-test-id='error' className={classNames(classes.errorWrapper)}>
            <div className={classNames(classes.errorContainer, classes.container)}>
                <img className={classes.errorIcon} src={errorIcon} alt='error icon' />
                <h3 className={classes.errorContent}>Что-то пошло не так. Обновите страницу через некоторое время.</h3>
                <img className={classes.errorDisabledButton} src={errorDisabled} alt='error disabled button' />
            </div>
        </div>
    );
};

export default Error;
