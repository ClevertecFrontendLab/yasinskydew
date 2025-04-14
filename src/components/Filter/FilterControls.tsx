import { Box, FormControl, FormLabel, Select, Switch } from '@chakra-ui/react';

const filterCollection = [
    {
        label: 'Аллергия на молоко',
        value: 'allergy-milk',
    },
    {
        label: 'Аллергия на яйца',
        value: 'allergy-eggs',
    },
    {
        label: 'Аллергия на орехи',
        value: 'allergy-nuts',
    },
];

export const FilterControls = () => (
    <FormControl
        display={{ base: 'none', lg: 'flex' }}
        alignItems='center'
        justifyContent='space-between'
        gap={2}
    >
        <Box display='flex' alignItems='center' ml='16px' gap='12px'>
            <FormLabel
                htmlFor='allergy-filter'
                fontSize='16px'
                fontWeight='500'
                color='var(--text-color-secondary)'
                mb={0}
            >
                Исключить мои аллергены
            </FormLabel>
            <Switch id='allergy-filter' variant='outline' colorScheme='gray' size='md' />
        </Box>
        <Select maxWidth='230px' placeholder='Выберете из списка...' variant='outline'>
            {filterCollection.map((item) => (
                <option key={item.value} value={item.value}>
                    {item.label}
                </option>
            ))}
        </Select>
    </FormControl>
);
