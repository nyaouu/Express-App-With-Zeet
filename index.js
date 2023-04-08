const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('This Server Is Connected | Express App With Zeet')
})

app.get('/status', (req, res) => {
    res.status(200).send({
        status: true
    });
})

const server = app.listen(port, '0.0.0.0', () => {
    const host = server.address().address
    const port = server.address().port
    console.log(`Listening at http://${host}:${port}`)
});