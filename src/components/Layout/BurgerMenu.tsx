import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, IconButton, useBreakpointValue, useDisclosure, VStack } from '@chakra-ui/react';

import { Breadcrumbs } from '../Breadcrumb/Breadcrumd';
import { MenuList } from '../MenuList/MenuList';

export const BurgerMenu = () => {
    const { isOpen, onToggle, onClose } = useDisclosure();
    const isDesktop = useBreakpointValue({ base: true, lg: false });

    return (
        <Box position='relative'>
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
                right='12px'
                width='344px'
                height='calc(100vh - 60px)'
                bg='white'
                borderRadius='16px'
                transform={isOpen ? 'translateX(0)' : 'translateX(100%)'}
                transition='transform 0.3s ease-in-out'
                borderRight='1px solid #E0E0E0'
            >
                <VStack align='stretch' height='100%' overflowY='auto'>
                    <Box m='16px 20px'>{isDesktop && <Breadcrumbs />}</Box>
                    <MenuList onClose={onClose} />
                </VStack>
            </Box>
        </Box>
    );
};
