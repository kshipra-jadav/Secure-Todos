// only for testing api call -- working or not

export default function handler(req, res) {
	res.status(200).json({acknowledged: true, status: "success"})
}