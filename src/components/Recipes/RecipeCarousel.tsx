import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';

import { RecipeItem } from './RecipeItem';
import { Recipe } from './RecipesData';
import { RecipeDisplayModeEnum } from './RecipeTypes';

interface RecipeCarouselProps {
    recipes: Recipe[];
}

export const RecipeCarousel = ({ recipes }: RecipeCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesToShow = useBreakpointValue({ base: 4, md: 2, lg: 4 });

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + slidesToShow! >= recipes.length ? 0 : prevIndex + slidesToShow!,
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - slidesToShow! < 0
                ? recipes.length - slidesToShow!
                : prevIndex - slidesToShow!,
        );
    };

    return (
        <Box position='relative' maxWidth='1360px'>
            <Box position='relative' overflow='hidden'>
                <Box
                    display='flex'
                    transition='transform 0.5s ease'
                    paddingLeft='10px'
                    transform={`translateX(-${currentIndex * (100 / slidesToShow!)}%)`}
                >
                    {recipes.map((recipe) => (
                        <Box key={recipe.id} flex={`0 0 calc(${100 / slidesToShow!}%)`}>
                            <RecipeItem
                                {...recipe}
                                displayMode={RecipeDisplayModeEnum.NORMAL}
                                noControl={true}
                            />
                        </Box>
                    ))}
                </Box>

                <IconButton
                    aria-label='Previous slide'
                    icon={<ChevronLeftIcon color='white' />}
                    position='absolute'
                    left='0'
                    top='50%'
                    transform='translateY(-50%)'
                    onClick={prevSlide}
                    zIndex={1}
                    bg='black'
                    _hover={{ bg: 'gray.100' }}
                />

                <IconButton
                    aria-label='Next slide'
                    icon={<ChevronRightIcon color='white' />}
                    position='absolute'
                    right='0'
                    top='50%'
                    transform='translateY(-50%)'
                    onClick={nextSlide}
                    zIndex={1}
                    bg='black'
                    _hover={{ bg: 'gray.100' }}
                />
            </Box>
        </Box>
    );
};
