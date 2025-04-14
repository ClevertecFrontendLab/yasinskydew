import avatarImage from '../../assets/mock-avatar.jpg';
import { Profile } from '../Profile/Profile';

const HeaderProfile = () => {
    const user = {
        id: 1,
        firstName: 'Екатерина',
        lastName: 'Константинопольская',
        avatar: avatarImage,
        link: '@bake_and_pie',
    };

    return <Profile author={user} />;
};
export default HeaderProfile;
