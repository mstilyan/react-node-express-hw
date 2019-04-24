import * as mongoose from 'mongoose';

export interface IProject extends mongoose.Document {
	date: string;
	authors: string[];
	name: string;
	url: string;
	description: string;
	tags: string[];
	status: number;
}
  
export const ProjectScema = new mongoose.Schema({
	date: { type: Date, required: true },
	authors: { type: Array, required: false },
	name: {type: String, required: true },
	url: {type: String, required: false },
	description: {type: String, required: false},
	tags: {type: Array, required: false },
	status: {type: Number, required: true },
});
  
const ProjectCollection = mongoose.model<IProject>("projects", ProjectScema);
export default ProjectCollection;