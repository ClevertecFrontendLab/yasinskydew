import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, IconButton, useBreakpointValue, useDisclosure, VStack } from '@chakra-ui/react';

import { Breadcrumbs } from '../Breadcrumb/Breadcrumd';
import { MenuList } from '../MenuList/MenuList';

export const BurgerMenu = () => {
    const { isOpen, onToggle } = useDisclosure();
    const isDesktop = useBreakpointValue({ base: true, lg: false });

    return (
        <Box>
            <IconButton
                aria-label='Open menu'
                icon={<HamburgerIcon />}
                onClick={onToggle}
                variant='ghost'
                size='lg'
            />
            <Box
                position='fixed'
                top='70px'
                left={0}
                width='250px'
                height='calc(100vh - 70px)'
                bg='white'
                transform={isOpen ? 'translateX(0)' : 'translateX(-100%)'}
                transition='transform 0.3s ease-in-out'
                zIndex={999}
                borderRight='1px solid #E0E0E0'
            >
                <VStack
                    align='stretch'
                    height='100%'
                    overflowY='auto'
                    justifyContent='space-between'
                >
                    <Box m='16px 20px'>{isDesktop && <Breadcrumbs />}</Box>
                    <MenuList />
                </VStack>
            </Box>
        </Box>
    );
};
