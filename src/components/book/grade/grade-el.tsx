import {FC} from 'react';

import classes from './grade.module.scss';

interface GradeElProps {
    isFill: boolean;

}

export const GradeEl:FC<GradeElProps> = ({ isFill }) => {

    const className = [classes.gradeItem];

    className.push(isFill ? classes.gradeFillBackground : classes.gradeEmptyBackground)

    return (
        <div className={className.join(' ')} />
    )
};
