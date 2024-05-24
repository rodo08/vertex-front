import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import auth from './src/logic/auth.js'
//import DB from './src/assets/data/DB.json'

const app = express()
const PORT = 3001
app.use(cors())
console.log('test')
app.use(bodyParser.json())

app.post('/register', async (req, res) => {
  const { email, password } = req.body
  //   if (!email || !password) {
  //     return res.status(400).json({ error: 'Email and password are required' })
  //   }

  //   const existingUser = db.users.find((user) => user.email === email)
  //   if (existingUser) {
  //     return res.status(400).json({ error: 'Email already exists' })
  //   }

  const newUser = await auth.register(email, password)
  console.log(newUser)
  res.status(200).json({ message: 'Registration successful', user: newUser })
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' })
  }

  const users = await auth.login(email, password)
  console.log('test', users)
  const filterEmail = await users.filter((user) => user.email === email)
  const filterPassword = await filterEmail?.filter((user) => user?.password === password)
  if (filterEmail.length === 0 && filterPassword?.length === 0) {
    return res.status(401).json({ error: 'Invalid credentials' })
  }

  return res.status(200).json({ message: 'Login successful', user: email, token: new Date() })
})
app.listen(PORT, () => {
  console.log(`Express.js Server working at http://localhost:${PORT}`)
})
