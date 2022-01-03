import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';

import CardComponent from './component/CardComponent/CardComponent';
import RadioBtnComponent from './component/RadioBtn/RadioBtnComponent';
import InputSearchComponent from './component/inputSearchComponent/InputSearchComponent';
import { getEverything } from './service/article'

function App() {
  const [globalLengthArt, setGlobalLen] = useState(0)
  const [additionalArticles, setAdditional] = useState([])
  const [articles, setArticles] = useState([])

  useEffect(async () => {
    const { data } = await getEverything()
    loadArticles(data.articles)}, [])

  const updateArticles = (data) => {
    setArticles(data.map(art => {
      return {
        title: art.title,
        publishedAt: art.publishedAt,
        urlToImage: art.urlToImage,
        description: art.description
      }
    }))
  }

  const loadArticles = (articlesLoading) => {
    setGlobalLen(articlesLoading.length)
    setAdditional(articlesLoading.slice(10))
    updateArticles(articlesLoading.slice(0, 10))
  }
  
  const fetchMoreArticles = () => {
    updateArticles(articles.concat(additionalArticles.slice(0, 10)))
  }
  return (
    <div className="App">
      <InputSearchComponent cbUpdate={loadArticles}/>
      <RadioBtnComponent cbUpdate={loadArticles} />

      <InfiniteScroll
        dataLength={globalLengthArt}
        next={fetchMoreArticles}
        hasMore={globalLengthArt > articles.length}
      >
        <div className='container-art'>
          {articles.map((art, index) => {
            return <CardComponent
              key={index}
              title={art.title}
              data={art.data}
              publishedAt={art.publishedAt}
              image={art.urlToImage}
              desc={art.description}></CardComponent>
          })}
        </div>
      </InfiniteScroll>

    </div>
  );
}

export default App;
