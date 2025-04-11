import { Heading, Text, VStack } from '@chakra-ui/react';

import { FilterControls } from './FilterControls';
import { SearchBar } from './SearchBar';

interface FilterContainerProps {
    title: string;
    description?: string | null;
}

export const FilterContainer = (props: FilterContainerProps) => {
    const { title, description } = props;
    return (
        <VStack width={{ base: '95%', md: '50%' }} spacing={4}>
            <Heading
                fontSize={{ base: '24px', md: '48px' }}
                fontWeight='700'
                textAlign='center'
                color='var(--text-color-secondary)'
            >
                {title}
            </Heading>
            {description && (
                <Text
                    fontSize='16px'
                    textAlign='center'
                    fontWeight='500'
                    color='rgba(0, 0, 0, 0.48);'
                >
                    {description}
                </Text>
            )}
            <SearchBar />
            <FilterControls />
        </VStack>
    );
};
