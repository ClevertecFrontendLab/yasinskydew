import { Box, Collapse, Flex, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { useMainMenu } from '~/store/hooks';
import { MenuCategory, SubCategory } from '~/store/menu-slice';

import ShevronDown from '../../assets/MenuIcons/Item/ShevronDown.svg';
import { CustomIcon } from '../Layout/CustomIcon';
import { SubCategoryItem } from './SubCategoryItem';

interface MenuItemProps extends MenuCategory {
    isExpanded: boolean;
    onCategoryClick: (category: MenuCategory) => void;
    onSubCategoryClick: (category: MenuCategory, subCategory: SubCategory) => void;
}

export const MenuItem = (props: MenuItemProps) => {
    const { onCategoryClick, onSubCategoryClick, isExpanded, ...category } = props;
    const { selectedCategory, selectedSubCategory } = useMainMenu();
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        onCategoryClick(category);
        navigate(`/menu/${category.id}`);
    };

    const handleSubCategoryClick = (subCategory: SubCategory) => {
        onSubCategoryClick(category, subCategory);
        navigate(`/menu/${category.id}/${subCategory.id}`);
    };

    return (
        <Box data-test-id={category.id === 7 ? 'vegan-cuisine' : null}>
            <Box
                key={category.id}
                padding='12px 8px'
                display='flex'
                alignItems='center'
                cursor='pointer'
                justifyContent='space-between'
                onClick={handleClick}
                bg={selectedCategory?.id === category.id ? 'var(--lime100-color)' : 'transparent'}
            >
                <Flex alignItems='center' gap='12px'>
                    <CustomIcon src={category.icon} alt={category.name} />
                    <Text
                        fontSize='16px'
                        fontWeight='500'
                        color='var(--text-color-secondary)'
                        lineHeight='150%'
                    >
                        {category.name}
                    </Text>
                </Flex>
                <CustomIcon
                    src={ShevronDown}
                    alt='shevron-down'
                    style={{
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.2s ease-in-out',
                    }}
                />
            </Box>
            <Collapse in={isExpanded}>
                <Box>
                    {category.subCategories.map((subCategory) => (
                        <SubCategoryItem
                            key={subCategory.id}
                            subCategory={subCategory}
                            isSelected={selectedSubCategory?.id === subCategory.id}
                            onClick={handleSubCategoryClick}
                        />
                    ))}
                </Box>
            </Collapse>
        </Box>
    );
};
