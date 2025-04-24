import { Td, Tr } from '@chakra-ui/react';

import { RecipeIngridient } from '~/store/recipe-slice';

export interface IngridientIRowProps {
    recipeIngridient: RecipeIngridient;
    portions: number;
}

export const IngridientIRow = (props: IngridientIRowProps) => {
    const { recipeIngridient, portions } = props;

    const count = Number(recipeIngridient.count) * portions;

    return (
        <Tr>
            <Td fontSize='sm' lineHeight='5' fontWeight='medium'>
                {recipeIngridient.title}
            </Td>
            <Td textAlign='right' fontSize='sm' lineHeight='5' fontWeight='medium'>
                {count} {recipeIngridient.measureUnit}
            </Td>
        </Tr>
    );
};
