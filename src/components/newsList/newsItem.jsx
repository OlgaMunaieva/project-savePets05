import {Datebox, NewsMedia, NewsText, NewsTitle, StyledItem} from './StyledItem';

const NewsItem = ({ item }) => {

  return (
    <StyledItem>
      <NewsMedia
        src={
          `https://www.nytimes.com/${item.multimedia[0].url}` ||
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
