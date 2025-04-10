import { Text, Tooltip } from '@chakra-ui/react';

interface RecipeTitleProps {
    children: string;
}

export const RecipeTitle = (props: RecipeTitleProps) => (
    <Tooltip
        label={props.children}
        placement='top'
        hasArrow
        bg='gray.700'
        color='white'
        borderRadius='md'
    >
        <Text fontSize='20px' fontWeight='bold' textAlign='left' noOfLines={1}>
            {props.children}
        </Text>
    </Tooltip>
);
