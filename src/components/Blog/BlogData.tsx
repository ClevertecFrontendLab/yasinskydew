import avatar1 from '../../assets/Blog/avatar-1.png';
import avatar2 from '../../assets/Blog/avatar-2.png';
import avatar3 from '../../assets/Blog/avatar-3.png';
import { Author } from '../Profile/Profile';

export interface BlogData {
    id: number;
    author: Author;
    text: string;
}

const blogData: BlogData[] = [
    {
        id: 1,
        author: {
            id: 1,
            firstName: 'Елена',
            lastName: 'Высоцкая',
            avatar: avatar1,
            link: '@elenapovar',
        },
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        id: 2,
        author: {
            id: 2,
            firstName: 'Alex',
            lastName: 'Cook',
            avatar: avatar2,
            link: '@funtasticooking',
        },
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        id: 3,
        author: {
            id: 3,
            firstName: 'Екатерина',
            lastName: 'Константинопольская',
            avatar: avatar3,
            link: '@bake_and_pie',
        },
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
];

export { blogData };
