import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import creds from './credentials.json'

const options = {
	providers: [
		GoogleProvider({
			clientId: creds.web.client_id,
			clientSecret: creds.web.client_secret
		})
	],
	debug: false
}

console.log(process.env.GOOGLE_ID)
console.log(process.env.GOOGLE_SECRET)

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => NextAuth(req, res, options)