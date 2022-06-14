import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Todo ({ todo, getTodos }) {
	const [checked, setChecked] = useState('')
	const router = useRouter()
	const refresh = async () => {
		await router.replace(router.asPath)
		await router.replace(router.asPath)

	}
	const handleCheck = async (e) => {
		const result = await axios.delete('http://localhost:3000/api/deleteTodo', {data: {id: todo._id}})
		// setChecked(e.target)
		await getTodos(todo.email)
		// await router.replace(router.asPath)
		await refresh()
		console.log('refresh done')
	}

	return (
			<>
				<tr className= "pl-60 border border-solid border-y-ivory border-x-lighterblue border-t-lighterblue border-b-8 pb-4">
					<td className = "pr-10"><input type = "checkbox" className="rounded-full w-6 h-6" onChange={handleCheck}/></td>
					<td>{todo.todo}</td>
				</tr>
			</>
	)
}