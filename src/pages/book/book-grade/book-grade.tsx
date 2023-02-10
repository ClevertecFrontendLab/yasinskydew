import {FC} from 'react';

import {Grade} from '../../../components/book/grade/grade';
import {IBookCardFull} from '../../../types/types';

import classes from './book-grade.module.scss';

interface BookGradeProps {
    bookItem: IBookCardFull,
}
export const BookGrade: FC<BookGradeProps> = ({ bookItem }) => (
        <div className={classes.bookGrade}>
            <h3>Рейтинг</h3>
            <div className={classes.score}>
                <Grade  hasGrade={bookItem.hasGrade} grade={bookItem.grade} />
                { bookItem.grade ? <div>{bookItem.grade}</div> : '' }
            </div>
        </div>
    );
