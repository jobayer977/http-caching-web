import React, { useEffect, useState } from 'react';

function App() {
	const [article, setArticle] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const querying = new URLSearchParams(window.location.search).get('id');
				const response = await fetch(
					`http://localhost:4000/articles/${querying}`
				);
				const data = await response.json();
				setArticle(data);
				console.log('Hello');
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []); // Empty dependency array removed

	if (!article) {
		return <p>Loading...</p>;
	}

	return (
		<div>
			<h2>{article.title}</h2>
			<p>{article.content}</p>
		</div>
	);
}

export default App;
