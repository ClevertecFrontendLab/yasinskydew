import { Box, Text } from '@chakra-ui/react';

import { SubCategory } from '../../store/menu-slice';

interface SubCategoryItemProps {
    subCategory: SubCategory;
    isSelected: boolean;
    onClick: (subCategory: SubCategory) => void;
}

export const SubCategoryItem = ({ subCategory, isSelected, onClick }: SubCategoryItemProps) => (
    <Box position='relative' ml='40px' mt='4px'>
        <Text
            py='8px'
            px='16px'
            fontSize='16px'
            fontWeight={isSelected ? '700' : '500'}
            color='var(--text-color-secondary)'
            cursor='pointer'
            onClick={() => onClick(subCategory)}
            textAlign='left'
            position='relative'
            left={isSelected ? '-8px' : '0'}
            borderLeft={
                isSelected ? '8px solid var(--lime100-color)' : '1px solid var(--lime100-color)'
            }
        >
            {subCategory.name}
        </Text>
    </Box>
);
