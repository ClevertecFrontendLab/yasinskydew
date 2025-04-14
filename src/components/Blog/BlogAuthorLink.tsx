import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/react';

interface BlogAuthorLinkProps {
    isMobile: boolean;
}

export const BlogAuthorLink = (props: BlogAuthorLinkProps) => (
    <Link
        href='/blog'
        fontSize={{ base: '16px', lg: '18px' }}
        fontFamily='var(--font-family)'
        fontWeight='600'
        lineHeight='156%'
        display={props.isMobile ? 'none' : 'block'}
        mr={{ base: '0px', xl: '16px' }}
        pt={{ base: '20px', lg: '0px' }}
    >
        Все авторы <ArrowForwardIcon />
    </Link>
);
