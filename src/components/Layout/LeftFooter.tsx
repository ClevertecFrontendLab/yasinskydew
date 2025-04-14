import { Box, Text } from '@chakra-ui/react';

import LogoutIcon from '../../assets/Footer/logout-btn.svg';
import { CustomIcon } from './CustomIcon';

export const LeftFooter = () => (
    <Box
        display='flex'
        flexDirection='column'
        alignItems='flex-start'
        gap='16px'
        padding='32px 24px'
    >
        <Text
            textAlign='left'
            fontSize='12px'
            fontWeight='500'
            fontFamily='var(--font-family)'
            color='rgba(0, 0, 0, 0.24);'
        >
            Версия программы 03.25
        </Text>
        <Text
            textAlign='left'
            fontSize='12px'
            fontWeight='400'
            fontFamily='var(--font-family)'
            color='rgba(0, 0, 0, 0.64);'
        >
            Все права защищены, ученический файл, <br /> ©Клевер Технолоджи, 2025
        </Text>
        <Box display='flex' alignItems='flex-start' gap='4px' cursor='pointer'>
            <CustomIcon src={LogoutIcon} alt='logout' padding='2px 0' />
            <Text
                fontSize='12px'
                fontWeight='600'
                lineHeight='133%'
                fontFamily='var(--font-family)'
            >
                Выйти
            </Text>
        </Box>
    </Box>
);
