import { useBreakpointValue, VStack } from '@chakra-ui/react';

import { MenuList } from '../MenuList/MenuList';
import { BurgerMenu } from './BurgerMenu';
import { LeftFooter } from './LeftFooter';

const NavPanel = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    if (isMobile) {
        return <BurgerMenu />;
    }

    return (
        <VStack
            height='calc(100vh - 80px)'
            overflowY='auto'
            borderRight='1px solid #E0E0E0'
            justifyContent='space-between'
            position='fixed'
            width='250px'
        >
            <MenuList />
            <LeftFooter />
        </VStack>
    );
};

export default NavPanel;
