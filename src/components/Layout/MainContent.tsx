import { VStack } from '@chakra-ui/react';

import { Blog } from '../Blog/Blog';
import { FilterContainer } from '../Filter/FilterContainer';
import { RecipeList } from '../Recipes/RecipeList';
import { Recipes } from '../Recipes/Reipes';
import { RelevantKichen } from '../RelevantKichen/RelevantKichen';

const MainContent = () => (
    <VStack spacing={6} maxW='1360px'>
        <FilterContainer />
        <Recipes />
        <RecipeList />
        <Blog />
        <RelevantKichen />
    </VStack>
);

export default MainContent;
