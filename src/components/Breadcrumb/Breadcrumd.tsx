import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, useBreakpointValue } from '@chakra-ui/react';
import { memo } from 'react';

import { useBreadcrumbs } from '~/store/hooks';

import separatorIcon from '../../assets/Breadcrumbs/BreadcrumbSeparator.svg';
import { CustomIcon } from '../Layout/CustomIcon';

export const Breadcrumbs = memo(() => {
    const { breadcrumbs } = useBreadcrumbs();
    const isMobile = useBreakpointValue({ base: true, lg: false });

    return (
        <Breadcrumb
            separator={<CustomIcon src={separatorIcon} alt='separator' />}
            sx={{
                '.chakra-breadcrumb__list': {
                    display: 'flex',
                    flexWrap: 'wrap',
                },
            }}
        >
            {breadcrumbs.map((item, index) => (
                <BreadcrumbItem key={index} isCurrentPage={index === breadcrumbs.length - 1}>
                    <BreadcrumbLink
                        href={item.path}
                        fontSize={isMobile ? '14px' : '16px'}
                        fontWeight='400'
                        fontFamily='var(--font-family)'
                        margin={0}
                        color='var(--text-color-secondary)'
                        whiteSpace='nowrap'
                    >
                        {item.label}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    );
});
