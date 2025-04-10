import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';

interface CarouselProps {
    children: React.ReactNode[];
    slidesToShow?: number;
    gap?: number;
}

export const CustomCarousel = ({ children, gap = 24 }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const responsiveSlidesToShow = useBreakpointValue({ base: 1, md: 2, lg: 3, '2xl': 4 }) || 1;

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

    return (
        <Box position='relative' overflow='hidden' maxW='1360px'>
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
            <IconButton
                aria-label='Previous slide'
                icon={<ChevronLeftIcon color='white' />}
                transform='translateY(-50%)'
                onClick={prevSlide}
                zIndex={1}
                bg='black'
                _hover={{ bg: 'gray.100' }}
                boxShadow='md'
                size={{ base: 'sm', md: 'md' }}
                position='absolute'
                left='0'
                top='50%'
            />
            <IconButton
                aria-label='Next slide'
                icon={<ChevronRightIcon color='white' />}
                transform='translateY(-50%)'
                onClick={nextSlide}
                zIndex={1}
                bg='black'
                _hover={{ bg: 'gray.100' }}
                boxShadow='md'
                size={{ base: 'sm', md: 'md' }}
                position='absolute'
                right='0'
                top='50%'
            />
        </Box>
    );
};
