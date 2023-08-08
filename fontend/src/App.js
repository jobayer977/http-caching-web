import React, { useEffect, useState } from 'react';
function App() {
	const [articles, setArticles] = useState(null);
	const [headers, setHeaders] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:4000/articles`);
			const data = await response.json();
			const headers = [];
			response.headers.forEach((value, key) => {
				headers.push(`${key}: ${value}`);
			});
			setHeaders(headers);
			setArticles(data);
		};
		fetchData();
	}, []);
	if (!articles) {
		return <p>Loading...</p>;
	}
	return (
		<div>
			<h2>Headers</h2>
			<ul>
				{headers?.map((value, key) => {
					return <li>{value}</li>;
				})}
			</ul>
			<br />
			<h2>Response</h2>
			{articles.map((article) => (
				<>
					<h2>{article.title}</h2>
					<p>{article.content}</p>
				</>
			))}
		</div>
	);
}
export default App;
