import { Image, ImageProps } from '@chakra-ui/react';

interface CustomIconProps extends Omit<ImageProps, 'src'> {
    src: string;
    alt: string;
}

export const CustomIcon = ({ src, alt, ...props }: CustomIconProps) => (
    <Image src={src} alt={alt} objectFit='contain' {...props} />
);
