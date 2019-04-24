import mongoose from 'mongoose';
import ProjectCollection from './ProjectCollection';

const host = process.env.HOSTNAME || "localhost";
const port = process.env.PORT || "27017";
const name = process.env.DBNAME || "projects";

mongoose.connect(`mongodb://${host}:${port}/${name}`, { useNewUrlParser: true })
	.then(res => {
		console.log("Connected to Mongodb!");
	}).catch(err => {
		console.log(err);
	});

export default {
	ProjectCollection,
}
