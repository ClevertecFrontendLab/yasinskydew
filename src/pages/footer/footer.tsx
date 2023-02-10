import {FC} from 'react';

import {Copyright} from '../../components/copyright/copyright';
import {Social} from '../../components/social/social';

import classes from './footer.module.scss';

export const Footer:FC = () => (
        <footer className={[classes.footer].join(' ')}>
            <Copyright />
            <Social />
        </footer>
    )
