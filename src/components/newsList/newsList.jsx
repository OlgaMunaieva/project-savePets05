import NewsItem from './newsItem.jsx';
const { default: StyledList } = require('./StyledNewsList.styled.js');

const NewsList = ({ items }) => {
  return (
    <StyledList>
      {items.map((item, i) => (
        <NewsItem key={i} item={item} />
      ))}
    </StyledList>
  );
};

export default NewsList;
