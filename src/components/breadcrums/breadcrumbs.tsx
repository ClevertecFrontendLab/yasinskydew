import chevronIcon from './images/icon-chevron.svg';
import classes from './breadcrumbs.module.scss';
import { FC } from 'react';
import {useAppState} from "../../context";

export const Breadcrumbs: FC = () => {

  const { breadCrumbsPath } = useAppState();
  const breadCrumbsItems: Array<string | JSX.Element> = [];

  breadCrumbsPath.forEach((i, index) => {
    breadCrumbsItems.push(i);
    if (breadCrumbsPath.length - 1 !== index) {
      breadCrumbsItems.push(<img key={Math.random()} src={chevronIcon} alt='chevron' />);
    }
  });

  return (
    <section className={classes.breadCrumbsWrapper}>
      <p className={[classes.breadCrumbs, classes.container, classes.wrapper].join(' ')}>
        {breadCrumbsItems.map((i) => i)}
      </p>
    </section>
  );
};
