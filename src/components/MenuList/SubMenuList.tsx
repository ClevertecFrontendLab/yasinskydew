import { Tab, TabList, Tabs } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { useBreadcrumbs, useMainMenu } from '~/store/hooks';
import { SubCategory } from '~/store/menu-slice';

export const SubMenuList = () => {
    const navigate = useNavigate();
    const { selectedCategory, selectedSubCategory, selectSubCategory } = useMainMenu();
    const { setBreadcrumbItems } = useBreadcrumbs();

    const handleSubCategoryClick = (subCategory: SubCategory) => {
        selectSubCategory(subCategory);
        navigate(`/${selectedCategory?.id}/${subCategory.id}`);
        setBreadcrumbItems([
            {
                label: 'Главная',
                path: '/',
            },
            {
                label: selectedCategory?.name || '',
                path: `/${selectedCategory?.id}/1`,
            },
            {
                label: subCategory.name,
                path: `/${selectedCategory?.id}/${subCategory.id}`,
            },
        ]);
    };

    const style = {
        fontSize: '16px',
        fontWeight: '500',
        color: 'var(--text-color-secondary)',
        padding: '8px 16px',
    };

    const getStyles = (subCategory: SubCategory) => ({
        ...style,
        color:
            selectedSubCategory?.id === subCategory.id
                ? 'var(--lime600-color)'
                : 'var(--text-color-secondary)',
        borderBottom:
            selectedSubCategory?.id === subCategory.id
                ? '2px solid var(--lime600-color)'
                : '1px solid var(--text-color-secondary)',
    });

    return (
        <Tabs>
            <TabList>
                {selectedCategory?.subCategories.map((subCategory) => (
                    <Tab
                        key={subCategory.id}
                        {...getStyles(subCategory)}
                        onClick={() => handleSubCategoryClick(subCategory)}
                    >
                        {subCategory.name}
                    </Tab>
                ))}
            </TabList>
        </Tabs>
    );
};
