import { FC, MouseEvent, ReactNode } from 'react';

import classes from './button.module.scss';

export enum ButtonSize {
    large = 'large',
    small = 'small',
    control = 'control',
}

export enum ButtonType {
    primary = 'primary',
    secondary = 'secondary',
    control = 'control',
    controlActive = 'controlActive',
}
interface ButtonProps {
    children?: ReactNode;
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: boolean;
    dataTestId?: string;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    width?: string;
}

export const Button: FC<ButtonProps> = ({
    children,
    size = ButtonSize.large,
    type = ButtonType.primary,
    disabled = false,
    onClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    },
    width,
    ...props
}) => {
    const className = [classes.button, classes[size], classes[type]];

    if (disabled) {
        if (type === ButtonType.primary) {
            className.push(classes.primary_disabled);
        }
        if (type === ButtonType.secondary) {
            className.push(classes.secondary_disabled);
        }
    }

    const style = {
        width,
    };

    return (
        // eslint-disable-next-line react/button-has-type
        <button {...props} className={className.join(' ')} style={style} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
};
