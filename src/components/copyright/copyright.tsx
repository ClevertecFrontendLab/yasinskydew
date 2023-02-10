import {FC} from 'react';

import classes from './copyright.module.scss';

export const Copyright: FC = () => (
    <div className={classes.copyright}>
        <span>
            © 2020-2023 Cleverland.&nbsp;
        </span>
        <span>
            Все права защищены.
        </span>
    </div>
)
