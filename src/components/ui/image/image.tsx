import {FC} from 'react';

import imageDefault from './images/image-default.jpg';

import classes from './image.module.scss';


export enum ImageType {
    bookCard = 'bookCard',
    bookList = 'bookList',
    preview = 'preview',
    previewMini = 'previewMini',
}

interface ImageProps {
    url?: string,
    alt?: string,
    type?: ImageType,
}
export const Image: FC<ImageProps> = ({
    url,
    alt= 'image description',
    type= ImageType.bookCard,
}) => {
    const className = [classes.image, classes[type]];

    if (!url) {
        return (
            <div className={className.join(' ')}>
                <div />
            </div>
        );
    }

    return (
        <div className={className.join(' ')}>
            <img src={imageDefault} alt={alt} />
        </div>
    )

};
