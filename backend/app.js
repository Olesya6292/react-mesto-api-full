/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { DEFAULT } = require('./utils/constants');
const router = require('./routes');

const { PORT = 3000, DATABASE_URL = 'mongodb://localhost:27017/mestodb' } = process.env;

const app = express();

app.use(requestLogger);

app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

app.use(cors());

app.use(router);

app.use(errorLogger);

app.use(errors());

app.use((err, req, res, next) => {
  const { statusCode = DEFAULT, message } = err;
  res.status(statusCode).send({
    message: statusCode === DEFAULT ? 'На сервере произошла ошибка' : message,
  });
  next();
});

mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Connected to db');
  })
  .catch(() => {
    console.log('Error to db connection');
  });

app.listen(PORT, () => {
  console.log(`Server listen on ${PORT}`);
});
