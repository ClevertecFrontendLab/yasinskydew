import { Text, Tooltip } from '@chakra-ui/react';

interface RecipeDescriptionProps {
    description: string;
    noOfLines?: number;
}

export const RecipeDescription = ({ description, noOfLines = 3 }: RecipeDescriptionProps) => (
    <Tooltip
        label={description}
        placement='top'
        hasArrow
        bg='gray.700'
        color='white'
        p={3}
        borderRadius='md'
    >
        <Text color='gray.600' noOfLines={noOfLines} textAlign='left' fontSize='14px' mb={4}>
            {description}
        </Text>
    </Tooltip>
);
