import {FC} from 'react';

import {GradeEl} from './grade-el';

import classes from './grade.module.scss';

interface GradeProps {
    grade?: number;
}
// GradeEl
export const Grade:FC<GradeProps> = ({ grade }) => {

    if (!grade) {
       return (
        <p>ещё нет оценок</p>
       )
    }
    const grades = [];

    for (let i = 0; i < 5; i++) {
        grades.push(<GradeEl key={Math.random()} isFill={i < grade} />)
    }

    return (
        <div className={classes.grade}>
            {grades.map(el => el)}
        </div>
    );
};
