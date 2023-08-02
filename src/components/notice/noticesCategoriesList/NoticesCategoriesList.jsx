import NoticesCategoryItem from '../noticeCategoryItem/NoticeCategoryItem';
import information from '../../../images/no-information.png';

import React from 'react';
import { Container, List, Notification } from './NoticesCategoriesList.styled';

const NoticesCategoriesList = ({ pets }) => {
  return (
    <Container>
      {pets.length === 0 || null ? (
        <Notification>
          <img src={information} alt="" />
        </Notification>
      ) : (
        <List>
          {pets.map(
            ({
              id,
              category,
              sex,
              age,
              location,
              title,
              favorite,
              owner,
              photoUrl,
            }) => {
              return (
                <NoticesCategoryItem
                  key={id}
                  id={id}
                  category={category}
                  sex={sex}
                  age={age}
                  location={location}
                  title={title}
                  favorite={favorite}
                  owner={owner}
                  photoUrl={photoUrl}
                />
              );
            }
          )}
        </List>
      )}
    </Container>
  );
};
export default NoticesCategoriesList;
