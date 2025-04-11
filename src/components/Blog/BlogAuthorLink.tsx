import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/react';

interface BlogAuthorLinkProps {
    isMobile: boolean;
}

export const BlogAuthorLink = (props: BlogAuthorLinkProps) => (
    <Link
        href='/blog'
        fontSize='14px'
        fontWeight='bold'
        display={props.isMobile ? 'none' : 'block'}
    >
        Все авторы <ArrowForwardIcon />
    </Link>
);
