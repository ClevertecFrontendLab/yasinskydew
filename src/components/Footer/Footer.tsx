import { Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import home from '../../assets/Footer/home-btn.svg';
import search from '../../assets/Footer/search-btn.svg';
import write from '../../assets/Footer/write-btn.svg';
import profile from '../../assets/mock-avatar.jpg';
import { FooterItem } from './FooterItem';
export const Footer = () => {
    const navigate = useNavigate();
    const footer = [
        {
            icon: home,
            label: 'Главная',
            isShowIcon: true,
            onClick: () => {
                navigate('/');
            },
        },
        {
            icon: search,
            label: 'Поиск',
            onClick: () => {
                console.log('search');
            },
        },
        {
            icon: write,
            label: 'Записать',
            onClick: () => {
                console.log('write');
            },
        },
        {
            icon: profile,
            label: 'Мой профиль',
            onClick: () => {
                console.log('profile');
            },
        },
    ];
    return (
        <Box
            display={{ base: 'grid', lg: 'none' }}
            gridTemplateColumns='repeat(4, 1fr)'
            bg='var(--lime50-color)'
            alignItems='center'
            justifyContent='center'
            height='100px'
            data-test-id='footer'
        >
            {footer.map((item) => (
                <FooterItem key={item.label} {...item} />
            ))}
        </Box>
    );
};
