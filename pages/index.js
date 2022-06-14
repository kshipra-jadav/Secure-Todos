import Head from 'next/head'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Todo from '../Components/Todo'
import { signIn, signOut, useSession } from 'next-auth/react'
import AccessDenied from '../Components/AccessDenied'
import Typical from 'react-typical'
import { useRouter } from 'next/router'

export async function getServerSideProps (context) {
	const { getSession } = require('next-auth/react')
	const req = context.req
	const session = await getSession({ req })
	if(session) {
		console.log('gssp called')
		const { MongoClient } = require('mongodb')
		const url = 'mongodb+srv://kshipra:12345@w3dev-todo.b4tyc.mongodb.net/?retryWrites=true&w=majority'
		const client = new MongoClient(url)
		const db = client.db('w3dev')
		const collection = db.collection('todos')
		const mail = session.user.email
		const raw_data = await collection.find({ email: mail }).toArray()
		const new_data = JSON.parse(JSON.stringify(raw_data))
		// console.log(new_data)
		return {
			props: {
				data: new_data
			}
		}
	}
	return {
		props: {
		}
	}
}

const Home = ({data}) => {
	// console.log(data)
	const { data: session } = useSession()
	const [todos, setTodos] = useState([])
	const [currentTodo, setCurrentTodo] = useState('')
	useEffect(() => {
		if (session) {
			// console.log(session)
			const fetchTodos = async () => {
				await getAllTodos(session.user.email)
			}
			fetchTodos()
		}
	}, [session])
	const router = useRouter()
	const getAllTodos = async (email) => {
		// const data = await axios.get(`http://localhost:3000/api/getTodos?email=${ email }`)
		await router.replace(router.asPath)
		// console.log(data)
		setTodos(data)
		console.log(todos)
	}
	const handleInputChange = (e) => {
		setCurrentTodo(e.target.value)
	}
	const handleFormSubmit = async (e) => {
		e.preventDefault()
		// console.log(currentTodo)
		const request = {
			'todo': currentTodo
		}
		if (currentTodo) {
			const response = await axios.post('http://localhost:3000/api/setTodo', request)
			await getAllTodos(session.user.email)
			await router.replace(router.asPath)
			setCurrentTodo('')
		}
	}

	const typingElements = [
		'Let\'s Get Productive! 💯 ',
		2000,
		'You Can Do It! 🤝🏾 ',
		2000,
		'Here are Your To-Do\'s ',
		2000,
		'Hello There 👀 ',
		2000,
		'Let\'s Start Planning ',
		2000,
		'List Down Your Goals Here 🔥 ',
		2000
	]

	if (!session) return <AccessDenied/> // if not logged in then deny access
	// else, allow access

	return (
			<>
				<Head>
					<title>
						Simple To Do App
					</title>
				</Head>
				<div className="flex items-center justify-center font-poppins w-full min-h-screen absolute bg-lighterlavender ">
					<div className="grid grid-cols-1 gap-14 place-items-stretch w-1/2 pb-80">
						<div className="text-4xl font-bold text-center flex flex-row">
							<div style={ { width: '20em' } }>
								<Typical
										steps={ typingElements }
										loop={ Infinity }
										wrapper="p"
								/>
							</div>
							{ session.user.name }
						</div>
						<div>
							<form className="flex gap-11 flex-col items-center justify-center"
								  onSubmit={ handleFormSubmit } method="post">
								<input type="text" value={ currentTodo }
									   placeholder="             Add your todo item here"
									   className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black w-full rounded-t-2xl"
									   name="todo" onChange={ handleInputChange }/>

								<button type="submit"
										className="bg-emerald-200 rounded-2xl py-2 px-2 font-bold hover:bg-emerald-400 duration-300 w-56">
									Submit
								</button>


							</form>
						</div>

						{ !!todos.length && <div className="flex items-center justify-center -my-12">
							<table className="flex flex-col justify-center gap-5 pt-5 pb-5 text-xl bg-lighterblue rounded-2xl w-full">
								<tbody className="flex flex-col justify-center gap-5 pt-5 pb-5 text-xl bg-lighterblue rounded-2xl w-full">
								{
									todos.map(todo => <Todo todo={ todo } key={ todo._id } getTodos={ getAllTodos }/>)

								}
								</tbody>
							</table>
						</div> }
					</div>
				</div>

			</>
	)
}

export default Home