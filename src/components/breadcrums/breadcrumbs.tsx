import chevronIcon from './images/icon-chevron.svg';
import {breadCrumbsMock} from './mock';

import classes from './breadcrumbs.module.scss';

export interface BreadCrumbsProps {
    paths: string[],
}

export const Breadcrumbs = () => {

    const breadCrumbsItems: Array<string | JSX.Element> = [];

    const paths = breadCrumbsMock();

    paths.forEach((i, index) => {
        breadCrumbsItems.push(i);
        if(paths.length - 1 !== index) {
            breadCrumbsItems.push(<img key={Math.random()} src={chevronIcon} alt='chevron' />);
        }
    })

    return (
        <section className={classes.breadCrumbsWrapper}>
            <p className={[classes.breadCrumbs, classes.container, classes.wrapper].join(' ')}>
                {breadCrumbsItems.map(i => i)}
            </p>
        </section>
    );
}
