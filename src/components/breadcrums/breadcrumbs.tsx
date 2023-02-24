import chevronIcon from './images/icon-chevron.svg';
import classes from './breadcrumbs.module.scss';
import { FC } from 'react';
import {useAppDispatch, useAppState} from '../../context';
import {BreadCrumbsI} from "../../context/reducer";
import { Link } from 'react-router-dom';

export const Breadcrumbs: FC = () => {
    const { breadCrumbsPath } = useAppState();
    const dispatch = useAppDispatch();

    const breadCrumbsItems: Array<string | JSX.Element> = [];

    breadCrumbsPath.forEach((i: BreadCrumbsI, index) => {
        breadCrumbsItems.push(
            !i.path
                ? <span>{i.label}</span>
                : <Link
                    to={'books/' + i.path}
                    onClick={() => {
                        dispatch({
                            type: 'SET_BREAD_CRUMBS',
                            payload: [
                                {
                                    path: i.path,
                                    label: i.label,
                                },
                            ]
                        });}
                    }
                >{i.label}
                </Link>
        );
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
