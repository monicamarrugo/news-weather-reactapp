import React, { useState } from 'react';

const NewsCard = (props) => {
	const [showAge, setShowAge] = useState(false);

	return (
		<div className='contact-card'>
			<img src={props.urlToImage} alt='News Weather' width="100px" />
			<div className='user-details'>
				<p>Title: {props.title}</p>
				<p>Author: {props.author}</p>
				<button onClick={() => setShowAge(!showAge)}>Read More </button>
				{showAge && <p>{props.content}</p>}
			</div>
		</div>
	);
};

export default NewsCard;
