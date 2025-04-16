import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { useBreadcrumbs } from '~/store/hooks';

export const JusiestLoadMoBtn = () => {
    const navigate = useNavigate();
    const { setBreadcrumbItems } = useBreadcrumbs();

    async function loadMoreRecipes() {
        navigate('/juiciest');
        setBreadcrumbItems([
            {
                label: 'Главная',
                path: '/',
            },
            {
                label: 'Самое сочное',
                path: '/juiciest',
            },
        ]);
    }

    return (
        <Button
            bgColor='var(--lime400-color)'
            color='var(--text-color-secondary)'
            _hover={{
                bgColor: 'var(--lime600-color)',
                color: 'var(--lime400-color)',
            }}
            alignSelf='center'
            rightIcon={<ArrowForwardIcon />}
            onClick={loadMoreRecipes}
            size='lg'
            data-test-id='juiciest-link'
            fontFamily='var(--font-family)'
            fontWeight='600'
            fontSize='18px'
            lineHeight='156%'
        >
            Вся подборка
        </Button>
    );
};
