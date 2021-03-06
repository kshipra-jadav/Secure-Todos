import axios from 'axios'

export default function Todo ({ todo, getTodos, domain }) {
	const handleCheck = async (e) => {
		const result = await axios.delete(`${domain}/api/deleteTodo`, {data: {id: todo._id}})
		await getTodos(todo.email)
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