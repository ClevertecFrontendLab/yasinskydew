import {
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Table,
    TableCaption,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react';
import { useState } from 'react';

import { RecipeIngridient } from '~/store/recipe-slice';

import { IngridientIRow } from './IngridientIRow';

export interface IngridientTableProps {
    recipeIngridients: RecipeIngridient[];
}

export const IngridientTable = (props: IngridientTableProps) => {
    const [portions, setPortions] = useState(1);

    const { recipeIngridients } = props;
    return (
        <Table
            variant='striped'
            colorScheme='gray'
            // size={{base: 'sm', xl: 'md'}}
        >
            <TableCaption display='none'>Ингредиенты</TableCaption>
            <Thead>
                <Tr>
                    <Th padding={{ base: '4px 16px', xl: '4px 24px' }}>
                        <Text
                            fontWeight='bold'
                            textTransform='uppercase'
                            lineHeight='4'
                            color='lime.600'
                            fontSize='xs'
                        >
                            ингридиенты
                        </Text>
                    </Th>
                    <Th
                        display='flex'
                        gap='16px'
                        alignItems='center'
                        justifyContent='flex-end'
                        padding='4px 16px'
                        pr='0'
                        border='none'
                    >
                        <Text
                            fontWeight='bold'
                            textTransform='uppercase'
                            lineHeight='4'
                            color='lime.600'
                            fontSize='xs'
                        >
                            порций
                        </Text>
                        <NumberInput
                            defaultValue={1}
                            min={1}
                            max={100}
                            onChange={(valueString) => setPortions(+valueString)}
                            value={+portions}
                            width='90px'
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </Th>
                </Tr>
            </Thead>
            <Tbody>
                {recipeIngridients.map((ingredient, index) => (
                    <IngridientIRow key={index} recipeIngridient={ingredient} portions={portions} />
                ))}
            </Tbody>
        </Table>
    );
};
