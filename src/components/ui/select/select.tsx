import { FC, useState } from 'react';

import selectIcon from './images/select-icon.svg';

import classes from './select.module.scss';

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
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div className={classes.button} onClick={() => onButton()}>
                <img src={selectIcon} alt='select icon' />
                <div className={classes.text}>{state.text}</div>
            </div>
            {state.open && (
                <div className={classes.content}>
                    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                    {options.map((i) => (
                        <div className={classes.contentItem} onClick={() => onOptionClick(i)}>
                            {i.text}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
