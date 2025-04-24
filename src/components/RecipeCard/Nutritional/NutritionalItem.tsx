import { Flex, Text } from '@chakra-ui/react';

export interface NutritionalItemProps {
    title: string;
    quantity: number;
    unit: string;
}

export const NutritionalItem = (props: NutritionalItemProps) => {
    const { title, quantity, unit } = props;
    return (
        <Flex
            flexDirection={{ base: 'row', md: 'column' }}
            alignItems='center'
            justifyContent={{ base: 'space-between', md: 'flex-start' }}
            padding='16px'
            gap='12px'
            border='1px solid'
            borderColor='blackAlpha.200'
            minWidth={{ base: '100%', md: '136px', xl: '149px' }}
            borderRadius='16px'
            w='100%'
        >
            <Text
                color='blackAlpha.600'
                lineHeight='5'
                fontSize='sm'
                flex={{ base: '1', md: 'none' }}
                textAlign={{ base: 'left', md: 'center' }}
            >
                {title}
            </Text>
            <Text
                fontSize='4xl'
                lineHeight='10'
                color='lime.800'
                fontWeight='medium'
                flex={{ base: '1', md: 'none' }}
                textAlign='center'
            >
                {quantity}
            </Text>
            <Text
                color='blackAlpha.900'
                fontSize='sm'
                lineHeight='5'
                fontWeight='semibold'
                textTransform='uppercase'
                flex={{ base: '1', md: 'none' }}
                textAlign={{ base: 'right', md: 'center' }}
            >
                {unit}
            </Text>
        </Flex>
    );
};
