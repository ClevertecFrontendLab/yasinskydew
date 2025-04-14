import { useBreakpointValue } from '@chakra-ui/react';

interface CustomButtonProps {
    children: React.ReactNode;
}

export const CustomButton = (props: CustomButtonProps) => {
    const isMobile = useBreakpointValue({ base: true, lg: false });
    const padding = isMobile ? '8px' : '12px';
    return (
        <button
            style={{
                border: '1px solid black',
                background: 'none',
                borderRadius: '6px',
                padding,
                cursor: 'pointer',
            }}
        >
            {props.children}
        </button>
    );
};

export const CustomCarouselButton = (props: CustomButtonProps) => (
    <button
        style={{
            border: '1px solid black',
            background: 'none',
            borderRadius: '6px',
            padding: '12px',
            cursor: 'pointer',
        }}
    >
        {props.children}
    </button>
);
