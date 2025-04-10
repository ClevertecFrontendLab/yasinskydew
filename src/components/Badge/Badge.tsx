import { Flex, Text } from '@chakra-ui/react';

import { CustomIcon } from '../Layout/CustomIcon';

interface BadgeProps {
    children: string;
    bgColor: string;
    icon: string;
    iconSize: string;
    fontSize: string;
}

export const CustomBadge = ({ children, bgColor, icon, iconSize, fontSize }: BadgeProps) => (
    <Flex bgColor={bgColor} alignItems='center' gap={2} padding='4px 8px' borderRadius='4px'>
        <CustomIcon src={icon} alt={children} width={iconSize} height={iconSize} />
        <Text fontSize={fontSize}>{children}</Text>
    </Flex>
);
