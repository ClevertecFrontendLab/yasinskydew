import { Box, Button, Text } from '@chakra-ui/react';

import { MenuCategory } from '~/store/menu-slice';

import { Recipe } from '../../store/recipe-slice';
import { CustomIcon } from '../Layout/CustomIcon';

interface RelevantKichenCardProps {
    menuCategory: MenuCategory;
    children: Recipe;
}

export const RelevantKichenCard = ({ menuCategory }: RelevantKichenCardProps) => {
    const { name } = menuCategory;

    return (
        <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            borderRadius='lg'
            border='1px solid #E0E0E0'
            p={{ base: '12px 14px', xl: '12px 24px' }}
        >
            <Box display='flex' alignItems='center' gap={2}>
                <CustomIcon src={menuCategory.icon} alt={menuCategory.name} />
                <Text
                    fontSize={{ base: '16px', lg: '20px' }}
                    fontWeight='500'
                    lineHeight='140%'
                    fontFamily='var(--font-family)'
                    noOfLines={1}
                >
                    {name}
                </Text>
            </Box>
            <Button
                minWidth='87px'
                variant='outline'
                borderColor='var(--lime600-color)'
                color='var(--lime600-color)'
                size='sm'
            >
                Готовить
            </Button>
        </Box>
    );
};
