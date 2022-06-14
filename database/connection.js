const { MongoClient } = require('mongodb')

const url = 'mongodb+srv://kshipra:12345@w3dev-todo.b4tyc.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(url)
const db = client.db('w3dev')
const collection = db.collection('todos')

export default collection





