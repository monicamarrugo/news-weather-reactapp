import './App.css';
import './styles.css';
import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

function App() {

  const [news, setNews] = useState([]);

	useEffect(() => {
		fetch('https://localhost:44317/api/News/CurrentNews?country=us&city=3687238')
			.then((response) => response.json())
			.then((data) => {
				setNews(data.articles);
			});
	}, []);

  return (
		<>
			{news.map((newitem) => (
				<NewsCard
        urlToImage={newitem.urlToImage}
        title={newitem.title}
        author={newitem.author}
        content={newitem.content}
				/>
			))}
		</>
	);

  
}

export default App;
