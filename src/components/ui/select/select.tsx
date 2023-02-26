import { FC, useState } from 'react';

import selectIcon from './images/select-icon.svg';

import classes from './select.module.scss';
import classNames from 'classnames';
import { useAppDispatch, useAppState } from '../../../context';

export interface SelectOption {
    value: string;
    text: string;
}
export interface SelectProps {
    defaultValue: SelectOption;
    options: SelectOption[];
}
export const Select: FC<SelectProps> = ({ defaultValue, options }) => {
    const [state, setState] = useState({
        open: false,
        text: defaultValue.text,
        value: defaultValue.value,
    });
    const dispatch = useAppDispatch();
    const { sortDirection } = useAppState();

    const toggleSortDirection = () => {
        dispatch({
            type: 'SET_SORT_DIRECTION',
            payload: !sortDirection,
        });
    };

    const onOptionClick = (option: SelectOption) => {
        setState({
            ...state,
            text: option.text,
            value: option.value,
            open: !state.open,
        });
    };

    const onButton = () => {
        setState({
            ...state,
            open: !state.open,
        });
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.button} data-test-id='sort-rating-button' onClick={toggleSortDirection}>
                <div
                    className={classNames(classes.toggleSortDirection, {
                        [classes.toggleSortDirectionActive]: sortDirection,
                    })}
                >
                    <img src={selectIcon} alt='select icon' />
                </div>
                <div className={classes.text}>{state.text}</div>
            </div>
            {state.open && (
                <div className={classes.content}>
                    {options.map((i) => (
                        <div key={i.value} className={classes.contentItem} onClick={() => onOptionClick(i)}>
                            {i.text}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
