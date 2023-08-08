const express = require('express');
const app = express();
const path = require('path');

const cors = require('cors');

// Enable CORS
app.use(cors());

app.get('/articles', (req, res) => {
	const time = new Date().toLocaleTimeString('en-US', {
		second: 'numeric',
		minute: 'numeric',
		hour: 'numeric',
		calendar: 'gregory',
	});
	console.log(`${req.url} Gets called at ${time}`);

	// res.set('Expires', new Date(Date.now() + 15 * 1000));
	// res.set('Pragma', 'no-cache');

	res.set('Cache-Control', 'public, max-age=1115, must-revalidate');
	res.json([
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
	]);
});

app.listen(4000, () => {
	console.log('Server is running on port 4000');
});
