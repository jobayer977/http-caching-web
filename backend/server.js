const express = require('express');
const app = express();
const path = require('path');

const cors = require('cors');

// Enable CORS
app.use(cors());

// Serve article data
const articles = [
	{
		id: 1,
		title: 'Article 1',
		content: 'This is the content of Article 1.',
	},
	{
		id: 2,
		title: 'Article 2',
		content: 'This is the content of Article 2.',
	},
];

app.get('/articles/:id', (req, res) => {
	console.log(`${req.url} Gets called at ${Date.now()}`);
	const articleId = parseInt(req.params.id);
	const article = articles.find((article) => article.id === articleId);
	if (!article) {
		return res.status(404).json({ error: 'Article not found' });
	}

	// Set caching headers

	res.setHeader('Cache-Control', 'no-cache');

	res.json(article);
});

app.listen(4000, () => {
	console.log('Server is running on port 4000');
});
