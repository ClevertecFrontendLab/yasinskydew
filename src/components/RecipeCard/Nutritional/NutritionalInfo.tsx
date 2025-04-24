import { Flex, Text, VStack } from '@chakra-ui/react';

import { NutritionValue } from '~/store/recipe-slice';

import { NutritionalItem } from './NutritionalItem';

export const NutritionalInfo = (props: NutritionValue) => {
    const { calories, proteins, fats, carbohydrates } = props;
    const nutritionalItems = [
        { title: 'калорийность', quantity: calories, unit: 'ккал' },
        { title: 'белки', quantity: proteins, unit: 'грамм' },
        { title: 'жиры', quantity: fats, unit: 'грамм' },
        { title: 'углеводы', quantity: carbohydrates, unit: 'грамм' },
    ];
    return (
        <VStack alignItems='flex-start' gap='20px' maxW={{ base: '100%', xl: '668px' }} w='100%'>
            <Text fontSize='sm' lineHeight='5'>
                * Калорийность на 1 порцию
            </Text>
            <Flex
                gap={{ base: '24px', md: '12px' }}
                w='100%'
                flexDirection={{ base: 'column', md: 'row' }}
            >
                {nutritionalItems.map((item) => (
                    <NutritionalItem
                        key={item.title}
                        title={item.title}
                        quantity={item.quantity}
                        unit={item.unit}
                    />
                ))}
            </Flex>
        </VStack>
    );
};
