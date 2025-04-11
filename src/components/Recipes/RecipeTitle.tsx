import { Text, Tooltip, useBreakpointValue } from '@chakra-ui/react';

interface RecipeTitleProps {
    children: string;
}

export const RecipeTitle = (props: RecipeTitleProps) => {
    const isMobile = useBreakpointValue({ base: true, lg: false });
    return (
        <Tooltip
            label={props.children}
            placement='top'
            hasArrow
            bg='gray.700'
            color='white'
            borderRadius='md'
        >
            <Text
                fontSize={{ base: '16px', lg: '20px' }}
                fontWeight={isMobile ? 'normal' : 'bold'}
                textAlign='left'
                noOfLines={{ base: 2, lg: 1 }}
            >
                {props.children}
            </Text>
        </Tooltip>
    );
};
