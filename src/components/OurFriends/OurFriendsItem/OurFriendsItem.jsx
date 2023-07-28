import PropTypes from 'prop-types';
import {
  FriendCard,
  FriendImg,
  FriendWrapper,
  FriendThumb,
  FriendInfoThumb,
  FriendTitle,
  FriendInfoTitle,
  FriendInfoData,
} from '../OurFriendsItem/OurFriendsItem.styled';

const OurFriendsItem = ({ id, name, avatar, time, adress, phone, email }) => {
  return (
    <FriendCard>
      <FriendTitle href='#' target='_blank'>{name}</FriendTitle>
      <FriendThumb>
        <FriendImg src={avatar} alt="partner logo" />
        <FriendWrapper>
          <FriendInfoThumb>
            <FriendInfoTitle>Time:</FriendInfoTitle>
            <FriendInfoData>{time}</FriendInfoData>
          </FriendInfoThumb>
          <FriendInfoThumb>
            <FriendInfoTitle>Adress:</FriendInfoTitle>
            <FriendInfoData>{adress}</FriendInfoData>
          </FriendInfoThumb>
          <FriendInfoThumb>
            <FriendInfoTitle>Email:</FriendInfoTitle>
            <FriendInfoData>{email}</FriendInfoData>
          </FriendInfoThumb>
          <FriendInfoThumb>
            <FriendInfoTitle>Phone:</FriendInfoTitle>
            <FriendInfoData>{phone}</FriendInfoData>
          </FriendInfoThumb>
        </FriendWrapper>
      </FriendThumb>
    </FriendCard>
  );
};

export default OurFriendsItem;

OurFriendsItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
