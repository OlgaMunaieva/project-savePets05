import TitlePage from '../components/title/TitlePage';
import { OurFriendsList } from '../components/OurFriends/OurFriendsList/OurFriendsList';
import friends from '../components/OurFriends/data/friends.json';

const OurFriendsPage = () => {
  return (
    <div>
      <TitlePage>Our friends</TitlePage>
      <OurFriendsList items={friends} />
    </div>
  );
};

export default OurFriendsPage;
