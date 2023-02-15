import { FC } from 'react';

import socialFacebook from './images/social-facebok.svg';
import socialInst from './images/social-inst.svg';
import socialLinked from './images/social-linked.svg';
import socialVK from './images/social-vk.svg';
import { SocialItem, SocialItemProps } from './social-item/social-item';

import classes from './social.module.scss';

const socialButtons: SocialItemProps[] = [
    {
        src: socialFacebook,
        alt: 'social facebook',
        href: '#',
    },
    {
        src: socialInst,
        alt: 'social instagram',
        href: '#',
    },
    {
        src: socialVK,
        alt: 'social VK',
        href: '#',
    },
    {
        src: socialLinked,
        alt: 'social linkedIn',
        href: '#',
    },
];

export const Social: FC = () => (
    <ul className={classes.social}>
        {socialButtons.map((item) => (
            <SocialItem {...item} key={Math.random()} />
        ))}
    </ul>
);
