import { FC } from 'react';
import classes from './image.module.scss';

export enum ImageType {
    bookCard = 'bookCard',
    bookList = 'bookList',
    preview = 'preview',
    previewMini = 'previewMini',
}

interface ImageProps {
    url?: string;
    alt?: string;
    type?: ImageType;
}
export const Image: FC<ImageProps> = ({ url, alt = 'image description', type = ImageType.bookCard }) => {
    const className = [classes.image, classes[type]];
    if (!url) {
        return (
            <div className={className.join(' ')}>
                <div />
            </div>
        );
    }
    const baseUrl = 'https://strapi.cleverland.by';
    return (
        <div className={className.join(' ')}>
            <img src={`${baseUrl}${url}`} alt={alt} />
        </div>
    );
};
