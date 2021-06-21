import express from 'express';
import cors from 'cors';
import apiMocker from 'connect-api-mocker';

const port = 4000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use('/', apiMocker('mock-api'));

console.log(`Mock API Server is up and running at: http://localhost:${port}`);
app.listen(port);
