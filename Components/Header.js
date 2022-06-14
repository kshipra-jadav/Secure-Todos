import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import AccessDenied from './AccessDenied'

export default function Header () {
	const { data: session } = useSession()
	if (!session) return <AccessDenied/>
	return (
			<>
				<div className="top-0 w-full h-44 bg-lighterlavender flex flex-col relative border border-solid border-8 border-t-lighterlavender border-l-lighterlavender border-r-lighterlavender border-b-lightergreen font-poppins">
					<div className="grid grid-cols-2 w-full h-full absolute">
						<div className="grid gird-cols-1 content-center justify-center text-2xl gap-20">
							<div className="">
								You are Logged In As
							</div>
							<div className="font-bold">
								{ session.user.email }
							</div>
						</div>
						<div className="grid grid-cols-2 items-center content-center justify-center px-10 border border-double border-8 border-t-lighterlavender border-b-lighterlavender border-r-lighterlavender border-l-gray-500">
							<div className="ml-24">
								<button className="px-4 py-4 text-xl font-bold bg-amber-200 hover:bg-amber-400 duration-300 text-center rounded-2xl"
										onClick= {(e) => {
											e.preventDefault()
											signOut()
										}} >
									Sign Out
								</button>
							</div>

							<div className="border border-solid border-4 border-black my-2 border-t-lighterlavender border-b-lighterlavender border-l-gray-500 border-r-gray-500 ml-52">
								<Image src={ session.user.image } height="128" width="128" alt=" "/>
							</div>
						</div>
					</div>


				</div>
			</>
	)
}
