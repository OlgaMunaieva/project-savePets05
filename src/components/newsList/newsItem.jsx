import {Datebox, NewsMedia, NewsText, NewsTitle, StyledItem} from './StyledItem.styled.js';

const NewsItem = ({ item }) => {
  const mediaUrl = item && item.multimedia && item.multimedia.length > 0
  ? `https://www.nytimes.com/${item.multimedia[0].url}`
  : `https://source.unsplash.com/featured/?nature`;
  return (
    <StyledItem>
      <NewsMedia
        src={
          `${mediaUrl}` ||
          `https://source.unsplash.com/featured/?nature`
        }
        alt=""
      />
    
        <NewsTitle>{item.headline.main}</NewsTitle>
        <NewsText>{item.abstract}</NewsText>
      
      
      <Datebox className="box">
        <p>{new Date(item.pub_date).toLocaleDateString('en-EN')}</p>
        <a href={item.web_url}>Read more</a>
      </Datebox>
    </StyledItem>
  );
};

export default NewsItem;
