export default function DataUpload() {
	const handleClick = async (e) => {
		e.preventDefault()
		document.getElementById('upload').click()
		document.getElementById('upload').addEventListener('change', () => {
			document.getElementById('submit-btn').click()
		})

	}
	return(
			<>
				<form method="post" action="/api/getFile" encType="multipart/form-data">
					<input type = "file" name = "todo" accept = "application/JSON" className="hidden" id = "upload" />
					<button type = "submit" className= "hidden" id = "submit-btn"></button>
					<button className="px-4 py-4 text-xl font-bold bg-amber-200 hover:bg-amber-400 duration-300 text-center rounded-2xl" onClick = {handleClick}>
						Import ToDos (.JSON)
					</button>
				</form>
			</>
	)
}