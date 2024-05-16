import axios from 'axios'

export const handleBackToHome = (router) => {
  router.push('/')
}

export const handleGoToUser = (router) => {
  router.push('/user')
}

export const handleGoToPersonalInfo = (router) => {
  router.push('personal-information')
}

export const getData = async (url) => {
  try {
    const { data } = await axios.get(url)
    return data
  } catch (error) {
    console.error(error)
    throw new Error('Error fetching data')
  }
}
