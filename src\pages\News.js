import React from 'react';
import newsData from '../data/news';

const News = () => {
  return (
    <div>
      <h1>News</h1>
      <ul>
        {newsData.map((news) => (
          <li key={news.id}>
            <h2>{news.title}</h2>
            <p>{news.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;