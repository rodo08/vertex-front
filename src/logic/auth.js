import axios from 'axios'

export const ENDPOINT_PATH = 'http://localhost:4000/users'

const register = async (email, password) => {
  const user = { email, password }
  const response = await axios.post(ENDPOINT_PATH, user)
  console.log(response)
}

const login = async (email, password) => {
  const user = { email, password }
  console.log(user)
  const { data } = await axios.get(ENDPOINT_PATH)
  return data
}

export default {
  register,
  login
}
