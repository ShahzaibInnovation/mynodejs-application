const express = require('express');
const app = express();
const port = 3000;

// Middleware to serve static files (HTML, CSS, JS)
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Awesome webpage is live on http://localhost:${port}`);
});

