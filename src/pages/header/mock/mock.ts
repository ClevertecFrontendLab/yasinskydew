import { IUser } from '../../../types/types';

export interface HeaderItem {
    user: IUser;
    headerTitle: string;
}
export const mock = (): HeaderItem => ({
    headerTitle: 'Библиотека',
    user: {
        id: 1,
        avatarUrl: 'rferferf',
        name: 'Иван',
    },
});
