import {FC, useState} from 'react';

import {BookCard, BookCardMode} from '../../components/book/book_card/book-card';
import {MainControls} from '../../components/main-controls/main-controls';

import { mockBooks } from './mock';

import classes from './main-page.module.scss';

export const MainPage:FC = () => {

    const [viewCardMode, setViewCardMode] = useState(BookCardMode.grid);
    const cards = mockBooks();

    return (
        <section className={classes.main}>
            <MainControls
                viewCardMode={viewCardMode}
                setViewCardMode={setViewCardMode}
            />
            <div className={classes.bookList}>{cards.map((card) => <BookCard viewCardMode={viewCardMode} key={card.id} bookCard={card} data-test-id='card' />)}</div>
        </section>
    )
};
