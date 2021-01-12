/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const cors = require('cors');
const apiMocker = require('connect-api-mocker');

const port = 9000;
const app = express();

app.use(cors());
app.use('/', apiMocker('mock-api'));

console.log(`Mock API Server is up and running at: http://localhost:${port}`);
app.listen(port);
