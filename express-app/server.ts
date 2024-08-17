import express from 'express';

const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('../dist'))

app.get('/', (req, res) => {
    //res.set('Content-Type', 'text/html')
    res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});