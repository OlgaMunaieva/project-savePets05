import SearchInput from 'components/searchInput/SearchInput';
import { Title } from 'components/title/TitlePage.styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NewsList from 'components/newsList/newsList';
import Container from 'components/mainContainer/MainContainer.styled';
import NewsPaginator from 'components/newsPaginator/newsPaginator';

const API_KEY = '1e16297d452f42a18fd30eb2e7da87bf';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState('dog');
  const [isSearch, setIsSearch] = useState(false);
  const [displayed, setDisplayed] = useState([]);

  // const [total, setTotal] = useState(0);

  const getPopularNews = async () => {
    try {
      const url = `https://newsapi.org/v2/everything?q=${query}&p=2&sortBy=popularity&apiKey=${API_KEY}`;
      const response = await axios.get(url);
      //setTotal(response.data.totalResults);
      console.log(response.data);
      return response.data.articles;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchNews = () => {
      getPopularNews().then(articles =>{
        setNews(articles)
        setDisplayed(articles.slice(0, 6))});
      setIsSearch(false);
    };
    console.log(news);

    fetchNews();
    // eslint-disable-next-line
  }, [isSearch]);

  return (
    <Container.MainContainer>
      <Title>News</Title>
      <SearchInput
        setInput={setQuery}
        setSearch={setIsSearch}
        type="text"
        placeholder="Search"
      />
      <NewsList items={displayed} />
      <NewsPaginator limit={6} setItems={setDisplayed} news={news} />
    </Container.MainContainer>
  );
};

export default NewsPage;
