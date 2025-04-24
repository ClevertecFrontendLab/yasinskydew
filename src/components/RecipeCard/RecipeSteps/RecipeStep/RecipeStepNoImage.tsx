import { Badge, Card, CardBody, CardHeader, Text } from '@chakra-ui/react';

import { RecipeStep } from '~/store/recipe-slice';

export interface RecipeStepNoImageProps {
    step: RecipeStep;
}

export const RecipeStepNoImage = (props: RecipeStepNoImageProps) => {
    const { step } = props;
    return (
        <Card w='100%'>
            <CardHeader>
                <Badge
                    key='step'
                    variant='solid'
                    p='2px 8px'
                    color='black'
                    bgColor='blackAlpha.100'
                >
                    <Text fontSize='sm' lineHeight='5' fontWeight='normal' textTransform='none'>
                        Шаг {step.stepNumber}
                    </Text>
                </Badge>
            </CardHeader>
            <CardBody pt='0'>
                <Text fontSize='sm' lineHeight='5' fontWeight='normal'>
                    {step.description}
                </Text>
            </CardBody>
        </Card>
    );
};
