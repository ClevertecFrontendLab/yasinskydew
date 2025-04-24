import { Badge, Card, CardBody, CardHeader, Image, Stack, Text, Tooltip } from '@chakra-ui/react';

import { RecipeStep } from '~/store/recipe-slice';

export interface RecipeStepWithImageProps {
    step: RecipeStep;
}

export const RecipeStepWithImage = (props: RecipeStepWithImageProps) => {
    const { step } = props;
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            borderRadius='8'
            w='100%'
            size={{ base: 'sm', xl: 'md' }}
        >
            <Image
                src={step.image}
                alt={step.description}
                w={{ base: '158px', xl: 'auto' }}
                h={{ base: '128px', xl: 'auto' }}
            />
            <Stack align='flex-start' gap='0' maxH={{ base: '128px', xl: 'auto' }}>
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
                    <Tooltip label={step.description}>
                        <Text fontSize='sm' lineHeight='5' fontWeight='normal'>
                            {step.description}
                        </Text>
                    </Tooltip>
                </CardBody>
            </Stack>
        </Card>
    );
};
