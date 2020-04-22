require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const validateBearerToken = require('./validate-bearer-token');
const errorHandler = require('./error-handler');
const articlesRouter = require('./articles/articles-router');
// const logger = require('./logger');

const app = express();

const morganOption = (NODE_ENV === 'production')
    ? 'tiny' : 'dev';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());
//app.use(validateBearerToken);

app.use('/api/articles', articlesRouter);

app.get('/', (req, res) => {
    res.send('Hello');
});

app.use(errorHandler);

module.exports = app;