import classes from './loader.module.scss';
export const Loader = () => {
    return (
        <div className={classes.loaderWrapper} data-test-id='loader'>
            <div className={classes.ldsRing} />
        </div>
    );
};
