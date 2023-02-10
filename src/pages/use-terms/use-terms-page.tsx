import {FC} from 'react';

import {Article} from '../../components/arcitle/article';

import {useTermsMock} from './mock';

import classes from './use-terms-page.module.scss';

export interface PointI {
    id: string,
    text: string;
    subItems?: PointI[],
}

export const UseTermsPage:FC = () => (
        <section className={[classes.useTermPage].join(' ')}>
            <Article mock={useTermsMock} />
        </section>
    );
