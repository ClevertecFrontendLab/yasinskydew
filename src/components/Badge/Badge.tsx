import { Flex, ResponsiveValue, Text } from '@chakra-ui/react';

import { CustomIcon } from '../Layout/CustomIcon';

type Position = 'relative' | 'absolute' | 'fixed' | 'sticky';
interface BadgeProps {
    children: string;
    bgColor: string;
    icon: string;
    display: string;
    position: ResponsiveValue<Position>;
    top: string;
    left: string;
}

export const CustomBadge = ({
    children,
    bgColor,
    icon,
    display,
    position = 'relative',
    top = '0',
    left = '0',
}: BadgeProps) => (
    <Flex
        bgColor={bgColor}
        alignItems='center'
        gap={2}
        padding={{ base: '2px 4px', md: '4px 8px' }}
        borderRadius='4px'
        display={display}
        position={position}
        top={top}
        left={left}
    >
        <CustomIcon src={icon} alt={children} width='18px' height='18px' />
        <Text noOfLines={1} fontSize={{ base: '14px', md: '16px' }}>
            {children}
        </Text>
    </Flex>
);
