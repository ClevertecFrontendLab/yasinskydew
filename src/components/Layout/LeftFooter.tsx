import { Box, Text } from '@chakra-ui/react';
import { TbLogout2 } from 'react-icons/tb';

export const LeftFooter = () => (
    <Box display='flex' flexDirection='column' alignItems='flex-start' gap='16px' padding='0 24px'>
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
            Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
        </Text>
        <Box display='flex' alignItems='flex-start' gap='8px' cursor='pointer'>
            <TbLogout2 />
            <Text fontSize='12px' fontWeight='600' fontFamily='var(--font-family)'>
                Выйти
            </Text>
        </Box>
    </Box>
);
