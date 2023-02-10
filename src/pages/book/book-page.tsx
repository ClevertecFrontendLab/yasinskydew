import {FC, useState} from 'react';
import { useParams } from 'react-router-dom';

import { Button, ButtonSize, ButtonType } from '../../components/ui/button/button';
import { IBookCardFull } from '../../types/types';
import { mockBooks } from '../main/mock';

import { BookDetail } from './book-detail/book-detail';
import { BookGrade } from './book-grade/book-grade';
import { BookPreview } from './book-preview/book-preview';
import { BookReview } from './book-review/book-review';
import { mockBookItem } from './mock';

import classes from './book-page.module.scss';

export const BookPage: FC = () => {
  const { id } = useParams();

  const bookItem: IBookCardFull = {
    ...mockBookItem,
    ...mockBooks(Number(id))[0],
  };
    const [isOpenReview, setIsOpenReview] = useState<boolean>(true);
    const toggleReview = () => setIsOpenReview(!isOpenReview);
    const closeReview = () => setIsOpenReview(false);

  return (
      <section className={[classes.bookPageContent, classes.container, classes.wrapper].join(' ')}>
        <BookPreview bookItem={bookItem} />
        <BookGrade bookItem={bookItem} />
        <BookDetail bookItem={bookItem} />
        <BookReview bookItem={bookItem} toggleReview={toggleReview} isOpenReview={isOpenReview}/>
        <div className={classes.gradeButton}>
          <Button
              size={ButtonSize.large}
              type={ButtonType.primary}
              width='100%'
              onClick={closeReview}
              data-test-id='button-rating'
          >
            Оценить книгу
          </Button>
        </div>
      </section>
  );
};
