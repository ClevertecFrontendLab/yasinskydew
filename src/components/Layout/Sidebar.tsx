import { VStack } from '@chakra-ui/react';

import { MenuList } from '../MenuList/NemuList';

const Sidebar = () => (
    <VStack align='stretch' height='100%' overflowY='auto' borderRight='1px solid #E0E0E0'>
        <MenuList />
    </VStack>
);

export default Sidebar;
