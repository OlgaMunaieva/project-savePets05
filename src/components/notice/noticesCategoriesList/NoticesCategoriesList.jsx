import NoticesCategoryItem from '../noticeCategoryItem/NoticeCategoryItem';

import React from 'react';
import { Container, List, Notification } from './NoticesCategoriesList.styled';

const NoticesCategoriesList = ({ pets, locationCategory }) => {
  return (
    <Container>
      {pets.length === 0 ? (
        <Notification>
          <p>Ooops, there is no post for your query</p>
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
