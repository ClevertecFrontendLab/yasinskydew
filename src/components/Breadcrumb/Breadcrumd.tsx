import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

import { useBreadcrumbs } from '~/store/hooks';

export const Breadcrumbs = () => {
    const { breadcrumbs } = useBreadcrumbs();

    return (
        <Breadcrumb>
            {breadcrumbs.map((item, index) => (
                <BreadcrumbItem key={index} isCurrentPage={index === breadcrumbs.length - 1}>
                    <BreadcrumbLink
                        href={item.path}
                        fontSize='16px'
                        fontWeight='400'
                        fontFamily='var(--font-family)'
                        margin={0}
                        color='var(--text-color-secondary)'
                    >
                        {item.label}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    );
};
