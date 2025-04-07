import { VStack } from '@chakra-ui/react';

import { MenuList } from '../MenuList/NemuList';
import { LeftFooter } from './LeftFooter';

const Sidebar = () => (
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

export default Sidebar;
