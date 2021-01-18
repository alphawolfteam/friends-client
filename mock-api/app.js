import express from 'express';
import cors from 'cors';
import apiMocker from 'connect-api-mocker';

const port = 4000;
const app = express();

app.use(cors());
app.use('/', apiMocker('mock-api'));

console.log(`Mock API Server is up and running at: http://localhost:${port}`);
app.listen(port);
