import fileDownload from 'js-file-download'
import axios from 'axios'

export default function DataDownload ({ email }) {
	const domain = 'https://todo-w3dev-final.vercel.app/'
	// const domain = 'http://localhost:3000'
	const handleClick = async () => {
		const raw_data = await axios.get(`${ domain }/api/getTodos?email=${ email }`)

		const final_data = []

		raw_data.data.forEach((item, index) => {
			delete item['_id']
			delete item['email']
			final_data.push(item)
		})

		console.log(final_data)



		fileDownload(JSON.stringify(final_data), 'your-todos.json')
	}

	return (
			<>
				<button className="px-4 py-4 text-xl font-bold bg-amber-200 hover:bg-amber-400 duration-300 text-center rounded-2xl"
						onClick={handleClick}
				>
					Export ToDos (.JSON)
				</button>
			</>
	)
}