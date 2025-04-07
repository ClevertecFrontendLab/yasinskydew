import { Box, Flex, Image as ChakraImage, useColorModeValue } from '@chakra-ui/react';

import headerLogo from '../../assets/header-logo.svg';
import { Breadcrumbs } from '../Breadcrumb/Breadcrumd';
import HeaderProfile from '../HeaderProfile';

const Header = () => {
    const bgColor = useColorModeValue('var(--header-bg-color)', 'gray.800');

    return (
        <Box
            as='header'
            position='fixed'
            height='70px'
            top={0}
            left={0}
            right={0}
            bg={bgColor}
            zIndex={1000}
            boxShadow='sm'
        >
            <Flex mx='auto' px={4} h='100%' align='center' justify='space-between'>
                <Flex align='center' gap={12}>
                    <Box as='a' href='/'>
                        <ChakraImage src={headerLogo} alt='Logo' height='32px' width='136px' />
                    </Box>
                    <Breadcrumbs />
                </Flex>
                <HeaderProfile />
            </Flex>
        </Box>
    );
};

export default Header;
