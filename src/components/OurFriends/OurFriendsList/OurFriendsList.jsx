import axios from 'axios';
import PropTypes from 'prop-types';
import OurFriendsItem from '../../OurFriends/OurFriendsItem/OurFriendsItem';
import { FriendsList } from '../OurFriendsList/OurFriendsList.styled';

const baseURL = 'https://64bfe06f0d8e251fd1119ee8.mockapi.io/friends';

export const getOurFriends = async () => {
  try {
    const response = await axios.get(baseURL);
    const friends = response.data;
    // console.log(friends);
    return friends;
  } catch (error) {
    console.error(error);
  }
};

export const OurFriendsList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ id, name, avatar, time, adress, phone, email }) => (
        <OurFriendsItem
          key={id}
          name={name}
          avatar={avatar}
          time={time}
          adress={adress}
          phone={phone}
          email={email}
        />
      ))}
    </FriendsList>
  );
};

// export default OurFriendsList;

OurFriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
