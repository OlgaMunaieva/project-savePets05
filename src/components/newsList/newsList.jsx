import NewsItem from './newsItem.jsx' ;
const { default: StyledList } = require("./StyledNewsList")



const NewsList = ({items}) =>{
    return (
        <StyledList>
            {
                items.map(item=>(
                    <NewsItem key={item._id} item={item}/>
                ))
            }
        </StyledList>
    )
}

export default NewsList;