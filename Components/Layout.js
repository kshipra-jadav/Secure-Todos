import Header from './Header'
import { useSession } from 'next-auth/react'

export default function Layout ({ children }) {
	const { data: session } = useSession()
	if (!session) {
		return (
				<div>
					{ children }
				</div>
		)
	}
	return (
			<div>
				<Header/>
				{ children }

			</div>
	)
}