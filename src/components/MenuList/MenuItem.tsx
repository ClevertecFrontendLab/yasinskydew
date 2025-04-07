import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Collapse, Flex, Text } from '@chakra-ui/react';

import { CustomIcon } from '../Layout/CustomIcon';
import { MenuCategory } from './MenuData';

interface MenuItemProps extends MenuCategory {
    isExpanded: boolean;
    selectedCategoryId: number | null;
    selectedSubCategoryId: number | null;
    onCategoryClick: (categoryId: number) => void;
    onSubCategoryClick: (categoryId: number, subCategoryId: number) => void;
}

export const MenuItem = (props: MenuItemProps) => {
    const {
        name,
        icon,
        id,
        subCategories,
        isExpanded,
        selectedCategoryId,
        selectedSubCategoryId,
        onCategoryClick,
        onSubCategoryClick,
    } = props;

    const handleClick = () => {
        onCategoryClick(id);
    };

    const handleSubCategoryClick = (subCategoryId: number) => {
        onSubCategoryClick(id, subCategoryId);
    };

    return (
        <Box width='100%'>
            <Box
                key={id}
                padding='8px 16px'
                display='flex'
                alignItems='center'
                cursor='pointer'
                justifyContent='space-between'
                width='100%'
                onClick={handleClick}
                bg={selectedCategoryId === id ? 'var(--lime100-color)' : 'transparent'}
            >
                <Flex alignItems='center' gap={3}>
                    <CustomIcon src={icon} alt={name} />
                    <Text fontSize='16px' fontWeight='500' color='var(--text-color-secondary)'>
                        {name}
                    </Text>
                </Flex>
                <ChevronDownIcon
                    height='16px'
                    width='16px'
                    transform={isExpanded ? 'rotate(180deg)' : 'none'}
                    transition='transform 0.2s'
                />
            </Box>
            <Collapse in={isExpanded}>
                <Box>
                    {subCategories.map((subCategory) => (
                        <Box key={subCategory.id} position='relative' ml='40px' mt='4px'>
                            <Text
                                py='8px'
                                px='16px'
                                fontSize='16px'
                                fontWeight={
                                    selectedSubCategoryId === subCategory.id ? '700' : '500'
                                }
                                color='var(--text-color-secondary)'
                                cursor='pointer'
                                onClick={() => handleSubCategoryClick(subCategory.id)}
                                textAlign='left'
                                position='relative'
                                left={selectedSubCategoryId === subCategory.id ? '-8px' : '0'}
                                borderLeft={
                                    selectedSubCategoryId === subCategory.id
                                        ? '8px solid var(--lime100-color)'
                                        : '1px solid var(--lime100-color)'
                                }
                            >
                                {subCategory.name}
                            </Text>
                        </Box>
                    ))}
                </Box>
            </Collapse>
        </Box>
    );
};
