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
          {pets.map(({ id, category, sex, age, location, title, photoUrl }) => {
            return (
              <NoticesCategoryItem
                key={id}
                category={category}
                sex={sex}
                age={age}
                location={location}
                title={title}
                photoUrl={photoUrl}
              />
            );
          })}
        </List>
      )}
    </Container>
  );
};
export default NoticesCategoriesList;
