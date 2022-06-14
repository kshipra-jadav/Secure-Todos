import { signIn } from 'next-auth/react'
import Link from 'next/link'

export default function AccessDenied () {
	return (
			<>
				<div className="h-1/2 absolute w-full flex justify-center items-center text-red-600 text-6xl font-bold font-poppins block break-all">
					<p>Access Denied!</p>
				</div>
				<br/><br/><br/><br/><br/>
				<div className="h-1/2 absolute w-full flex justify-center items-center text-amber-400 text-4xl font-light font-poppins block break-all">


					<p>
						Please
						<Link href="/api/auth/signin">
							<a
								onClick={ (e) => {
									e.preventDefault()
									signIn()
								} }
								className="font-bold underline"
							> Login </a>
						</Link>
						In Order To Continue.
					</p>
				</div>
			</>
	)
}