import avatarImage from '../../assets/mock-avatar.jpg';
import { Profile } from '../Profile/Profile';

const HeaderProfile = () => {
    const user = {
        id: 1,
        firstName: 'Владимир',
        lastName: 'Ясинский',
        avatar: avatarImage,
        link: '@vladimir_yasinskiy',
    };

    return <Profile author={user} />;
};
export default HeaderProfile;
