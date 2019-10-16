const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan')
const apiRouter = require('./config/routes');
const config = require('./config/enviroment/index');
const cors = require('cors');


app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use('/api', apiRouter);

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(config.port, () => {
console.log(`Example app listening on port ${config.port}!`);
require('./db');
}
);

module.exports = app;