import middleware from "../../middlewares/multipartyForm"
import nextConnect from "next-connect"
import fs from "node:fs"
import { getSession } from 'next-auth/react'
import collection from '../../database/connection'

const handler = nextConnect()
handler.use(middleware)
console.log('getfile')

handler.post(async (req, res) => {
	const session = await getSession({req})
	if(!session){
		res.send('Improper Privileges')
		return 0
	}
	const path = req.files.todo[0].path
	await fs.readFile(path, "utf-8", async (err, data) => {
		if (err) {
			console.log(err)
			res.send('file error')
		}
		// console.log(data)

		await handleData(data, session.user.email)

	})
	res.redirect('/')
})

const handleData = async (str_data, email) => {
	const data = JSON.parse(str_data)
	data.forEach((item, index) => {
		item['email'] = email
	})
	const result = await collection.insertMany(data)
	console.log(result)
}

export const config = {
	api: {
		bodyParser: false,
	},
}

export default handler
