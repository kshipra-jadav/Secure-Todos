import collection from '../../database/connection'
import {getSession} from 'next-auth/react'

export default async function handler(req, res){
	const session = await getSession({req})

	if(!session){
		res.status(403).send("Improper Privileges")
	} else{
		const mail = session.user.email
		const todo = req.body.todo
		await collection.insertOne({email: mail, todo: todo})
		res.status(201).send("Data inserted successfully.")
	}
}