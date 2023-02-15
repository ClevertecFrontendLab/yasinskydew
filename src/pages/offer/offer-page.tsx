import { FC } from 'react';

import { Article } from '../../components/arcitle/article';

import { offerMock } from './mock';

import classes from './offer-page.module.scss';

export const OfferPage: FC = () => (
    <section className={[classes.offerPage].join(' ')}>
        <Article mock={offerMock} />
    </section>
);
