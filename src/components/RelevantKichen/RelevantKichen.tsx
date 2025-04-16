import { Box } from '@chakra-ui/react';

import { MenuCategory } from '../../store/menu-slice';
import { Recipe } from '../../store/recipe-slice';
import { RelevantKichenCardSection } from './RelevantKichenCardSection';
import { RelevantKichenHeadSection } from './RelevantKichenHeadSection';

interface RelevantKichenProps {
    menuCategory: MenuCategory;
    recipes: Recipe[];
}

export const RelevantKichen = (props: RelevantKichenProps) => {
    const { menuCategory, recipes } = props;

    return (
        <Box
            width='100%'
            borderTop='1px solid #E0E0E0'
            pt='24px'
            display='flex'
            flexDirection='column'
            gap={4}
        >
            <RelevantKichenHeadSection menuCategory={menuCategory} />
            <RelevantKichenCardSection recipes={recipes} menuCategory={menuCategory} />
        </Box>
    );
};
