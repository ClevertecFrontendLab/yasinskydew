import { Button, VStack } from '@chakra-ui/react';

import icon from '../../assets/ButtonArea/IconButton.png';
import { CustomIcon } from '../Layout/CustomIcon';

const ButtonArea = () => (
    <VStack width='100%' padding='40px'>
        <Button
            variant='outline'
            border='none'
            _hover={{ bg: 'none' }}
            _focus={{ outline: 'none', boxShadow: 'none' }}
        >
            <CustomIcon
                src={icon}
                alt='add'
                boxShadow='0px 0px 40px var(--lime600-color)'
                bg='transparent'
                borderRadius='full'
            />
        </Button>
    </VStack>
);

export default ButtonArea;
