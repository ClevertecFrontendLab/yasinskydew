import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';

import ArrowLeftIcon from '../../assets/Caroucell/BsArrowLeft.svg';
import ArrowRightIcon from '../../assets/Caroucell/BsArrowRight.svg';
import { CustomIcon } from '../Layout/CustomIcon';

interface CarouselProps {
    children: React.ReactNode[];
    gap?: number;
    [key: string]: unknown;
}

export const CustomCarousel = ({ children, gap = 24, ...props }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const responsiveSlidesToShow = 4;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + responsiveSlidesToShow >= children.length
                ? 0
                : prevIndex + responsiveSlidesToShow,
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - responsiveSlidesToShow < 0
                ? children.length - responsiveSlidesToShow
                : prevIndex - responsiveSlidesToShow,
        );
    };

    const isMobile = useBreakpointValue({ base: true, lg: false });

    return (
        <Box position='relative' overflow='hidden' maxW='1360px' {...props}>
            <Box
                display='flex'
                transition='transform 0.5s ease'
                justifyContent='flex-start'
                transform={`translateX(calc(-${currentIndex * (100 / responsiveSlidesToShow)}% - ${currentIndex === 0 ? 0 : gap}px))`}
                gap={`${gap}px`}
            >
                {children.map((child, index) => (
                    <Box key={index}>{child}</Box>
                ))}
            </Box>
            {!isMobile && (
                <IconButton
                    aria-label='Previous slide'
                    transform='translateY(-50%)'
                    onClick={prevSlide}
                    icon={
                        <CustomIcon
                            src={ArrowLeftIcon}
                            width='24px'
                            height='24px'
                            alt='arrow-left'
                        />
                    }
                    zIndex={1}
                    bg='black'
                    position='absolute'
                    padding='24px 12px'
                    left='0'
                    top='42%'
                />
            )}
            {!isMobile && (
                <IconButton
                    aria-label='Next slide'
                    icon={
                        <CustomIcon
                            src={ArrowRightIcon}
                            width='24px'
                            height='24px'
                            alt='arrow-right'
                        />
                    }
                    transform='translateY(-50%)'
                    onClick={nextSlide}
                    zIndex={1}
                    bg='black'
                    _hover={{ bg: 'gray.100' }}
                    boxShadow='md'
                    padding='24px 12px'
                    position='absolute'
                    right='0'
                    top='42%'
                />
            )}
        </Box>
    );
};
