import { FC, useState } from 'react';

import { BookCard, BookCardMode } from '../../components/book/book_card/book-card';
import { MainControls } from '../../components/main-controls/main-controls';
import classes from './main-page.module.scss';
import { bookAPI } from '../../services/book-service';
import { IBook } from '../../models/IBook';
import { Loader } from '../../components/ui/loader/loader';
import Error from '../../components/ui/error/error';

export const MainPage: FC = () => {
    const [viewCardMode, setViewCardMode] = useState(BookCardMode.grid);
    const { data: books = [], error, isLoading } = bookAPI.useFetchAllBooksQuery();
    return (
        <section className={classes.main}>
            <MainControls viewCardMode={viewCardMode} setViewCardMode={setViewCardMode} />
            <div className={classes.bookList}>
                {isLoading && <Loader />}
                {error && <Error error={'Error'} />}
                {!isLoading &&
                    !error &&
                    books.map((card: IBook) => (
                        <BookCard viewCardMode={viewCardMode} key={card.id} bookCard={card} data-test-id='card' />
                    ))}
            </div>
        </section>
    );
};
