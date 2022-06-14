import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const options = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET
		})
	],
	debug: false,
	secret: process.env.SECRET
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => NextAuth(req, res, options)