import { VStack } from '@chakra-ui/react';

import { MenuList } from '../MenuList/MenuList';
import { LeftFooter } from './LeftFooter';

const NavPanel = () => (
    <VStack
        align='stretch'
        height='100%'
        overflowY='auto'
        borderRight='1px solid #E0E0E0'
        justifyContent='space-between'
    >
        <MenuList />
        <LeftFooter />
    </VStack>
);

export default NavPanel;
