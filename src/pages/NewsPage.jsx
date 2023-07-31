import MainContainer from 'components/mainContainer/MainContainer.styled';
import { SearchInput } from 'components/searchInput/SearchInput';
import { Title } from 'components/title/TitlePage.styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NewsList from 'components/newsList/newsList';
import { Header } from 'components/header/Header.styled';

const BASE_URL = 'https://api.nytimes.com/svc/';
const API_KEY = 'mc1GG2VGT2VGMPz3mpzlHGRmnyjAqbuI';

const NewsPage = () => {
  const [news,setNews] = useState([]);
  const [query,setQuery] = useState("dog");
  const [isSearch, setIsSearch] = useState(false);

  const getPopularNews = async () => {
    try {
      const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}&page=2`;
      const response = await axios.get(url);
      console.log(response.data.response.docs);
      return response.data.response.docs;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    const fetchNews = () =>{
        getPopularNews().then(items => (items.slice(0,-4))).then(articles=>setNews(articles));
       
    }
    setIsSearch(false);
    fetchNews();
  },[isSearch])

  return (
    <MainContainer>
      <Header/>
      <Title>News</Title>
      <SearchInput setInput={setQuery} setSearch={setIsSearch} type="text" placeholder="Search" />
      <NewsList items={news}/>
    </MainContainer>
  );
};

export default NewsPage;
