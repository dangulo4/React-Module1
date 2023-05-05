import express from 'express';

const app = express();

// SET STATIC RESOURCES FROM 'PUBLIC' FOLDER
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(5000);
