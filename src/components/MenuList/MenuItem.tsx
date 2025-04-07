import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Flex, Text } from '@chakra-ui/react';

import { CustomIcon } from '../Layout/CustomIcon';
import { MenuCategory } from './MenuData';

export const MenuItem = (props: MenuCategory) => {
    const { name, icon, id } = props;
    return (
        <Box
            key={id}
            padding='8px 16px'
            display='flex'
            alignItems='center'
            cursor='pointer'
            justifyContent='space-between'
            width='100%'
        >
            <Flex alignItems='center' gap={3}>
                <CustomIcon src={icon} alt={name} />
                <Text fontSize='16px' fontWeight='500' color='var(--text-color-secondary)'>
                    {name}
                </Text>
            </Flex>
            <ChevronDownIcon height='16px' width='16px' />
        </Box>
    );
};
