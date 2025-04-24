import { Flex, Heading } from '@chakra-ui/react';

import { RecipeStep } from '~/store/recipe-slice';

import { RecipeStepNoImage } from './RecipeStep/RecipeStepNoImage';
import { RecipeStepWithImage } from './RecipeStep/RecipeStepWithImage';

export interface RecipeStepsProps {
    recipeSteps: RecipeStep[];
}

export const RecipeSteps = (props: RecipeStepsProps) => {
    const { recipeSteps } = props;
    return (
        <Flex flexDirection='column' alignItems='flex-start' justifyContent='flex-start' gap='20px'>
            <Heading fontSize='5xl' lineHeight='none' fontWeight='medium' color='black'>
                Шаги приготовления
            </Heading>
            {recipeSteps.map((step, index) =>
                step.image ? (
                    <RecipeStepWithImage step={step} key={index} />
                ) : (
                    <RecipeStepNoImage step={step} key={index} />
                ),
            )}
        </Flex>
    );
};
