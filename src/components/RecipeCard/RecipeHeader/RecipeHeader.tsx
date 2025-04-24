import {
    Badge,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Text,
    VStack,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

import BookMarkIcon from '~/assets/BookMark/BsBookmarkHeart.svg';
import EmojiIcon from '~/assets/BookMark/BsEmojiHeartEyes.svg';
import alarmIcon from '~/assets/BsAlarm.svg';
import { CustomIcon } from '~/components/Layout/CustomIcon';
import { Recipe } from '~/store/recipe-slice';

export interface RecipeHeaderProps {
    recipe: Recipe;
}

export default function RecipeHeader(props: RecipeHeaderProps) {
    const { recipe } = props;

    return (
        <Card
            flexDirection={{ base: 'column', md: 'row' }}
            w='100%'
            overflow='hidden'
            variant='filled'
            bgColor='white'
            gap={{ base: '16px', xl: '0px' }}
        >
            <Image
                src={recipe.image}
                alt={recipe.title}
                h={{ base: '100%', md: '224px', xl: '410px' }}
                w={{ base: '100%', md: '232px', xl: '353px', '2xl': '553px' }}
                objectFit='cover'
                borderRadius='8px'
                objectPosition='center'
            />
            <VStack w='100%' alignItems='stretch' ml={{ base: '0px', xl: '24px' }}>
                <CardHeader
                    p='0'
                    justifyContent='space-between'
                    alignItems={{ base: 'flex-start', xl: 'flex-end' }}
                    display='flex'
                >
                    <Flex
                        gap={{ base: '8px', xl: '16px' }}
                        flexDirection={{ base: 'column', md: 'row' }}
                    >
                        {recipe.subcategory.map((subcategory) => (
                            <Badge
                                key={subcategory}
                                variant='solid'
                                size='lg'
                                bgColor='lime.50'
                                color='black'
                                display='flex'
                                alignItems='center'
                                gap='8px'
                                p='4px 8px'
                            >
                                <CustomIcon src={EmojiIcon} alt='subcategory' w='10px' h='10px' />
                                <Text fontSize='text-sm' lineHeight='5' fontWeight='normal'>
                                    {subcategory}
                                </Text>
                            </Badge>
                        ))}
                    </Flex>
                    <Flex gap={{ base: '8px', xl: '16px' }}>
                        <Badge
                            key='bookmarks'
                            variant='solid'
                            display='flex'
                            alignItems='center'
                            gap={{ base: '6px', xl: '8px' }}
                            p={{ base: '4px', xl: '4px 8px' }}
                            color='lime.600'
                            bgColor='inherit'
                        >
                            <CustomIcon src={BookMarkIcon} alt='subcategory' w='10px' h='10px' />
                            <Text fontSize='text-sm' lineHeight='5' fontWeight='normal'>
                                {recipe.bookmarks}
                            </Text>
                        </Badge>
                        <Badge
                            key='likes'
                            variant='solid'
                            display='flex'
                            alignItems='center'
                            gap={{ base: '6px', xl: '8px' }}
                            p={{ base: '4px', xl: '4px 8px' }}
                            color='lime.600'
                            bgColor='inherit'
                        >
                            <CustomIcon src={EmojiIcon} alt='subcategory' w='10px' h='10px' />
                            <Text fontSize='text-sm' lineHeight='5' fontWeight='normal'>
                                {recipe.likes}
                            </Text>
                        </Badge>
                    </Flex>
                </CardHeader>
                <CardBody
                    gap='24px'
                    display='flex'
                    flexDirection='column'
                    alignItems='flex-start'
                    width={{ base: '100%', '2xl': '80%' }}
                    p='0'
                    mt={{ base: '0', md: '32px' }}
                >
                    <Text
                        className='recipe-title'
                        fontSize={{ base: '2xl', xl: '5xl' }}
                        fontWeight='bold'
                        maxW={{ base: '100%', '2xl': '70%' }}
                        lineHeight={{ base: '8', xl: 'none', '2xl': 'none' }}
                    >
                        {recipe.title}
                    </Text>
                    <Text
                        className='recipe-description'
                        fontSize='sm'
                        lineHeight='5'
                        fontWeight='normal'
                    >
                        {recipe.description}
                    </Text>
                </CardBody>
                <CardFooter
                    p='0'
                    justifyContent='space-between'
                    alignItems='flex-end'
                    flexDirection={{ base: 'column', md: 'row' }}
                    gap='6px'
                >
                    <Badge
                        display='flex'
                        alignItems='center'
                        gap='8px'
                        bgColor='blackAlpha.100'
                        variant={{ base: 'solid', '2xl': 'outline' }}
                        p={{ base: '2px 8px', md: '4px 8px' }}
                        borderRadius='4px'
                        alignSelf={{ base: 'flex-start', md: 'flex-end' }}
                    >
                        <CustomIcon src={alarmIcon} alt='alarmIcon' w='16px' h='16px' />
                        <Text fontSize='sm' lineHeight='5' fontWeight='normal' color='black'>
                            {recipe.time}
                        </Text>
                    </Badge>
                    <Flex
                        w={{ base: '100%', md: 'auto' }}
                        gap={{ base: '12px', xl: '16px' }}
                        justifyContent='flex-end'
                    >
                        <Button
                            leftIcon={
                                <CustomIcon src={EmojiIcon} alt='EmojiIcon' w='16px' h='16px' />
                            }
                            variant='outline'
                            colorScheme='black'
                            size={{ base: 'sm', xl: 'md', '2xl': 'lg' }}
                        >
                            <Text
                                fontSize={{ base: 'xs', xl: 'lg' }}
                                lineHeight={{ base: '4', xl: '7' }}
                                fontWeight='semibold'
                            >
                                Оценить рецепт
                            </Text>
                        </Button>
                        <Button
                            leftIcon={
                                <CustomIcon
                                    src={BookMarkIcon}
                                    alt='BookMarkIcon'
                                    w='16px'
                                    h='16px'
                                />
                            }
                            variant='solid'
                            colorScheme='black'
                            bgColor='lime.400'
                            color='black'
                            size={{ base: 'sm', xl: 'md', '2xl': 'lg' }}
                        >
                            <Text
                                fontSize={{ base: 'xs', xl: 'lg' }}
                                lineHeight={{ base: '4', xl: '7' }}
                                fontWeight='semibold'
                            >
                                Сохранить в закладки
                            </Text>
                        </Button>
                    </Flex>
                </CardFooter>
            </VStack>
        </Card>
    );
}
