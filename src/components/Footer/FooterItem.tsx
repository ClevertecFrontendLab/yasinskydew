import { Button, Text } from '@chakra-ui/react';

import { CustomIcon } from '../Layout/CustomIcon';

interface FooterItemProps {
    icon: string;
    label: string;
    isShowIcon?: boolean;
    onClick?: () => void;
}

export const FooterItem = ({ icon, isShowIcon = false, label, onClick }: FooterItemProps) => (
    <Button
        variant='outline'
        border='none'
        _hover={{ bg: 'none' }}
        _focus={{ outline: 'none', boxShadow: 'none' }}
        display='flex'
        flexDirection='column'
        alignItems='center'
        gap='8px'
        onClick={onClick}
    >
        <CustomIcon
            src={icon}
            alt='add'
            boxShadow={isShowIcon ? '0px 0px 40px var(--lime600-color)' : 'none'}
            bg='transparent'
            borderRadius='full'
            maxWidth='40px'
            maxHeight='40px'
        />
        <Text fontSize='12px' fontWeight='500'>
            {label}
        </Text>
    </Button>
);
