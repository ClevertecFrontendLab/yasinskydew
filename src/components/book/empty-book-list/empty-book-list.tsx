import React from 'react';
import classes from './empty-book-list.module.scss';

const EmptyBookList = () => {
    return (
        <div className={classes.emptyListContainer}>
            <h3 className={classes.emptyListTitle} data-test-id='empty-category'>
                В этой категории книг ещё нет
            </h3>
        </div>
    );
};

export default EmptyBookList;
