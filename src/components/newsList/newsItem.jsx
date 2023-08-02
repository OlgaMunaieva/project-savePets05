import {Datebox, NewsMedia, NewsText, NewsTitle, StyledItem} from './StyledItem.styled.js';

const NewsItem = ({ item }) => {
  return (
    <StyledItem>
      <NewsMedia
        src={ item.urlToImage ? `${item.urlToImage}` : `https://source.unsplash.com/featured/?nature`}
        alt=""
      />
    
        <NewsTitle>{item.title}</NewsTitle>
        <NewsText>{item.description}</NewsText>
      
      
      <Datebox className="box">
        <p>{new Date(item.publishedAt).toLocaleDateString('en-EN')}</p>
        <a href={item.url}>Read more</a>
      </Datebox>
    </StyledItem>
  );
};

export default NewsItem;
