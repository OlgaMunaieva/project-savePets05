import {Datebox, NewsMedia, NewsText, NewsTitle, StyledItem} from './StyledItem.styled.js';

const NewsItem = ({ item }) => {
  return (
    <StyledItem>
      <NewsMedia
        src={ item.imgUrl ? `${item.imgUrl}` : `https://source.unsplash.com/featured/?nature`}
        alt=""
      />
    
        <NewsTitle>{item.title}</NewsTitle>
        <NewsText>{item.text}</NewsText>
      
      
      <Datebox className="box">
        <p>{new Date(item.date).toLocaleDateString('en-EN')}</p>
        <a href={item.url} target="_blank" rel='noreferrer'>Read more</a>
      </Datebox>
    </StyledItem>
  );
};

export default NewsItem;
