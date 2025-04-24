import { Avatar, Badge, Button, Flex, Image } from '@chakra-ui/react';
import { Box, Text } from '@chakra-ui/react';

import LeftIcon from '~/assets/Author/btn-left-icon.svg';
import FollowersIcon from '~/assets/Author/folowers-left-icon.svg';

import { CustomIcon } from '../Layout/CustomIcon';
import { Author } from './Profile';

export interface AuthorCardProps {
    author: Author;
    followers: number;
}

export const AuthorCard = (props: AuthorCardProps) => {
    const { author, followers } = props;
    return (
        <Flex
            alignItems='center'
            gap={{ base: '8px', md: '16px' }}
            bgColor='lime.300'
            p={{
                base: '12px',
                md: '24px',
            }}
            borderRadius='8px'
            w='100%'
        >
            <Avatar
                src={author.avatar ?? undefined}
                borderRadius='full'
                width='96px'
                height='96px'
            />
            <Flex
                className='author-card-info'
                flexDirection='column'
                justifyContent='space-between'
                w='100%'
            >
                <Flex
                    flexDirection={{ base: 'column', md: 'row-reverse' }}
                    justifyContent='space-between'
                >
                    <Text
                        lineHeight='4'
                        fontWeight='normal'
                        fontSize={{ base: 'xs', md: 'sm' }}
                        fontFamily='var(--font-family)'
                        alignSelf={{ base: 'flex-end', md: 'flex-start' }}
                    >
                        Автор рецепта
                    </Text>
                    <Box className='author-card-info-name'>
                        <Text
                            fontSize={{ base: 'lg', md: '2xl' }}
                            fontWeight='semibold'
                            lineHeight='7'
                            mb='4px'
                        >
                            {author.firstName} {author.lastName}
                        </Text>
                        <Text
                            fontSize='sm'
                            fontWeight='normal'
                            lineHeight='5'
                            color='blackAlpha.700'
                        >
                            {author.link}
                        </Text>
                    </Box>
                </Flex>
                <Flex
                    className='author-card-info-buttons'
                    justifyContent='space-between'
                    alignItems='center'
                    mt='20px'
                >
                    <Button
                        variant='solid'
                        bgColor='black'
                        color='white'
                        size='xs'
                        leftIcon={<Image src={LeftIcon} alt='Left Icon' />}
                    >
                        Подписаться
                    </Button>
                    <Badge
                        size='sm'
                        bgColor='inherit'
                        display='flex'
                        alignItems='center'
                        gap='6px'
                        p='4px'
                    >
                        <CustomIcon src={FollowersIcon} alt='followers' w='12px' h='12px' />
                        <Text fontSize='xs' lineHeight='4' fontWeight='semibold' color='lime.600'>
                            {followers}
                        </Text>
                    </Badge>
                </Flex>
            </Flex>
        </Flex>
    );
};
