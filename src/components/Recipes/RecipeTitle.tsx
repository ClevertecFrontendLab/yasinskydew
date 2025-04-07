import { Text, Tooltip } from '@chakra-ui/react';

type Size = 'sm' | 'md' | 'lg';

interface RecipeTitleProps {
    title: string;
    size?: Size;
}

export const RecipeTitle = ({ title, size = 'md' }: RecipeTitleProps) => {
    const sizeStyles = {
        sm: {
            fontSize: 'lg',
            mb: 1,
        },
        md: {
            fontSize: 'xl',
            mb: 2,
        },
        lg: {
            fontSize: '2xl',
            mb: 3,
        },
    };

    const currentStyle = sizeStyles[size];

    return (
        <Tooltip
            label={title}
            placement='top'
            hasArrow
            bg='gray.700'
            color='white'
            borderRadius='md'
        >
            <Text
                fontSize={currentStyle.fontSize}
                fontWeight='bold'
                textAlign='left'
                noOfLines={1}
                mb={currentStyle.mb}
            >
                {title}
            </Text>
        </Tooltip>
    );
};
