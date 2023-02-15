import { FC } from 'react';

import { ArticleItem, ArticleType } from './article-item/article-item';

import classes from './article.module.scss';

export interface PointI {
    id: string;
    text: string;
    subItems?: PointI[];
}

export interface ArticleMockI {
    title: string;
    articles: PointI[];
}

export interface ArticleProps {
    mock: ArticleMockI;
}

export const Article: FC<ArticleProps> = ({ mock }) => {
    const createArticlesList = (articleItem: PointI, type: ArticleType, idPrefix?: string) => {
        if (!articleItem.subItems) {
            return <ArticleItem item={articleItem} type={type} key={articleItem.id} idPrefix={idPrefix} />;
        }

        return (
            <ArticleItem item={articleItem} type={type} key={articleItem.id} idPrefix={idPrefix}>
                <ul className={classes.termsList}>
                    {articleItem.subItems.map((i: PointI) => {
                        const newIdPrefix = idPrefix ? `${idPrefix}.${i.id}` : i.id;

                        return createArticlesList(i, ArticleType.secondary, newIdPrefix);
                    })}
                </ul>
            </ArticleItem>
        );
    };

    return (
        <section className={classes.main}>
            <h2>{mock.title}</h2>
            <ul className={classes.termsList}>
                {mock.articles.map((item: PointI) => createArticlesList(item, ArticleType.head))}
            </ul>
        </section>
    );
};
