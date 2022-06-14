import collection from '../../database/connection'
import { ObjectId } from 'mongodb'
export default async function handler(req, res) {
	const result = await collection.deleteOne({_id: ObjectId(req.body.id)})
	console.log(result)
	res.send(200)
}