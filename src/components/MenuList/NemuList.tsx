import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { menuCategories } from './MenuData';
import { MenuItem } from './MenuItem';

export const MenuList = () => {
    const [expandedCategoryId, setExpandedCategoryId] = useState<number | null>(null);
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
    const [selectedSubCategoryId, setSelectedSubCategoryId] = useState<number | null>(null);

    useEffect(() => {
        console.log(expandedCategoryId, selectedCategoryId, selectedSubCategoryId);
    }, [expandedCategoryId, selectedCategoryId, selectedSubCategoryId]);

    const handleCategoryClick = (categoryId: number) => {
        setExpandedCategoryId(expandedCategoryId === categoryId ? null : categoryId);
        setSelectedCategoryId(categoryId);
        setSelectedSubCategoryId(null);
    };

    const handleSubCategoryClick = (categoryId: number, subCategoryId: number) => {
        setSelectedCategoryId(categoryId);
        setSelectedSubCategoryId(subCategoryId);
    };

    return (
        <Box>
            {menuCategories.map((category) => (
                <MenuItem
                    key={category.id}
                    {...category}
                    isExpanded={expandedCategoryId === category.id}
                    selectedCategoryId={selectedCategoryId}
                    selectedSubCategoryId={selectedSubCategoryId}
                    onCategoryClick={handleCategoryClick}
                    onSubCategoryClick={handleSubCategoryClick}
                />
            ))}
        </Box>
    );
};
