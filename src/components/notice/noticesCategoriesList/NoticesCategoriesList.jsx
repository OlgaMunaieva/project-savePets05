// import PropTypes from 'prop-types';
import NoticesCategoryItem from '../noticeCategoryItem/NoticeCategoryItem';

import React from 'react';
import { Container, List, Notification } from './NoticesCategoriesList.styled';

const NoticesCategoriesList = ({ pets }) => {
  return (
    <Container>
      {pets.length === 0 ? (
        <Notification>
          <p>Ooops, there is no post for your query</p>
        </Notification>
      ) : (
        <List>
          {pets.map(({ _id, category, gender, birthday, city, title }) => {
            return (
              <NoticesCategoryItem
                key={_id}
                category={category}
                gender={gender}
                birthday={birthday}
                city={city}
                title={title}
              />
            );
          })}
        </List>
      )}
    </Container>
  );
};

export default NoticesCategoriesList;

// NoticesCategoriesList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ),
//   onRemoveContacts: PropTypes.func.isRequired,
// };
