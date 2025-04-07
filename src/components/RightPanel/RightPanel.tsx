import { Box, Flex } from '@chakra-ui/react';

import ProfileNotification from '../ProfileNotification/ProfileNotification';
import ButtonArea from './ButtonArea';

const RightPanel = () => (
    <Box
        position='fixed'
        right={0}
        top='70px'
        height='calc(100vh - 70px)'
        width='208px'
        bg='white'
        display={{ base: 'none', lg: 'block' }}
        zIndex={2}
    >
        <Flex
            flexDirection='column'
            alignItems='center'
            justifyContent='space-between'
            height='100%'
            padding='24px'
        >
            <ProfileNotification />
            <ButtonArea />
        </Flex>
    </Box>
);

export default RightPanel;
