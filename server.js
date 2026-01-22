const express = require('express');
const path = require('path');

const app = express();

// IMPORTANT: correct dist folder name
app.use(express.static(path.join(__dirname, 'dist/my-angular20-app')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/my-angular20-app/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
