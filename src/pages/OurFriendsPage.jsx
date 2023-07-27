import { useState, useEffect } from 'react';
import TitlePage from '../components/title/TitlePage';
import {
  OurFriendsList,
  getOurFriends,
} from '../components/OurFriends/OurFriendsList/OurFriendsList';
// import friends from '../components/OurFriends/data/friends.json'

const OurFriendsPage = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const friends = await getOurFriends();
        setFriends(friends);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
   
  }, []);

  return (
    <div>
      <TitlePage>Our friends</TitlePage>
      <OurFriendsList friends={friends} />
    </div>
  );
};

export default OurFriendsPage;
