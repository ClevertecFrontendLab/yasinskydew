import {
    Box,
    Flex,
    Image as ChakraImage,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react';

import headerLogo from '../../assets/Header/header-logo.svg';
import headerLogoShort from '../../assets/Header/header-logo-short.svg';
import { Breadcrumbs } from '../Breadcrumb/Breadcrumd';
import HeaderProfile from '../HeaderProfile/HeaderProfile';
import { BurgerMenu } from '../Layout/BurgerMenu';
import ProfileNotification from '../ProfileNotification/ProfileNotification';

const Header = () => {
    const bgColor = useColorModeValue('var(--header-bg-color)', 'gray.800');
    const isMobile = useBreakpointValue({ base: true, md: false });
    const isDesktop = useBreakpointValue({ base: true, lg: false });

    return (
        <Box
            as='header'
            position='fixed'
            height='80px'
            top={0}
            left={0}
            right={0}
            bg={bgColor}
            zIndex={1000}
            boxShadow='sm'
            data-test-id='header'
        >
            <Flex mx='auto' h='100%' align='center' justify='space-between' px={4}>
                <Flex align='center' gap={12}>
                    <Box as='a' href='/'>
                        <ChakraImage
                            src={isMobile ? headerLogoShort : headerLogo}
                            alt='Logo'
                            height='32px'
                        />
                    </Box>
                    {!isDesktop && (
                        <Box ml='83px'>
                            <Breadcrumbs />
                        </Box>
                    )}
                </Flex>
                <Flex align='center' gap={4}>
                    {!isDesktop && (
                        <Box mr='46px'>
                            <HeaderProfile />
                        </Box>
                    )}
                    {isDesktop && <ProfileNotification />}
                    {isDesktop && <BurgerMenu />}
                </Flex>
            </Flex>
        </Box>
    );
};

export default Header;
