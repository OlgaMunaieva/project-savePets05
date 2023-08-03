import { DateNews, Datebox, NewsMedia, NewsText, NewsTitle, StyledItem} from './StyledItem.styled.js';

const NewsItem = ({ item }) => {

  const handleDate = (dateObj) =>{
    const day = String(dateObj.getDate()).padStart(2, '0'); 
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); 
    const year = dateObj.getFullYear();
    return`${day}/${month}/${year}`
  }
  return (
    <StyledItem>
      <NewsMedia
        src={ item.imgUrl ? `${item.imgUrl}` : `https://source.unsplash.com/featured/?nature`}
        alt=""
      />
    
        <NewsTitle>{item.title}</NewsTitle>
        <NewsText>{item.text}</NewsText>
      
      
      <Datebox className="box">
        <DateNews>{handleDate(new Date(item.date))}</DateNews>
        <a href={item.url} target="_blank" rel='noreferrer'>Read more</a>
      </Datebox>
    </StyledItem>
  );
};

export default NewsItem;
