import collection from '../../database/connection'
import { getSession } from 'next-auth/react'

export default async function handler (req, res) {
	const session = await getSession({ req })
	if (!session) {
		res.status(403).send('Improper Privileges')
	} else {
		const mail = req.query.email
		const data = await collection.find({ email: mail }).toArray()
		res.status(200).send(data)
	}

}