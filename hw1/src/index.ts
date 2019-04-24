// import './config';
import cors = require('cors');
import bodyParser from 'body-parser';
import express from 'express';
import http from 'http';
import projectRouter from './routes/projectRouter';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(function (req, res, next) {
	res.setHeader('Last-Modified', (new Date()).toUTCString());
	next();
});

app.use('/api/v1/projects', projectRouter);

const port = process.env.PORT || 8080;
const server = new http.Server(app);
server.listen(port);

console.log(`Server running on http://localhost:${port}`);
