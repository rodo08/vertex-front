import axios from 'axios'

export const apiUrl = import.meta.env.VITE_APP_API_URL

export const client = import.meta.env.VITE_APP_API_PEXELS_CLIENT

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

export const query = [
  'young people',
  'hang out',
  'social gathering',
  'party',
  'music festival',
  'fun activities',
  'get-together',
  'concerts',
  'sports event',
  'dance party',
  'movie night',
  'game night',
  'community event',
  'food festival',
  'mixer',
  'outing',
  'celebration',
  'networking',
  'recreation',
  'interactive workshop',
  'group outing',
  'online meetup',
  'youth gathering',
  'socialize',
  'youth conference',
  'fun gathering',
  'music event',
  'youth seminar',
  'outing with friends',
  'dance event',
  'young adult meetup',
  'hangout spot',
  'youth party',
  'group activity',
  'youth mixer',
  'movie marathon',
  'sports competition',
  'music concert',
  'outdoor recreation',
  'social event',
  'game tournament',
  'friend gathering',
  'youth club event',
  'fun hangout',
  'youth festival',
  'group outing',
  'night out',
  'party gathering',
  'youth meetup',
  'youth night',
  'music jam session',
  'adventure outing',
  'dance night',
  'youth hangout',
  'music jam',
  'fun group activity',
  'youth social',
  'youth cinema night',
  'food fest',
  'group party',
  'youth workshop',
  'outdoor adventure',
  'music fest',
  'game night event',
  'youth get-together',
  'creative workshop',
  'youth gathering',
  'fun movie night',
  'sports event',
  'social hangout',
  'youth networking',
  'art workshop',
  'music jamming session',
  'youth dance party',
  'friendship outing',
  'recreational activity',
  'youth celebration',
  'group bonding',
  'youth outing',
  'game night gathering',
  'youth socializing',
  'youth night event',
  'outdoor activity',
  'youth community event',
  'music festival',
  'fun hangout spot',
  'youth fun event',
  'group movie night',
  'sports day out',
  'youth party gathering',
  'music performance',
  'friend hangout',
  'youth game night',
  'creative gathering',
  'youth dance event',
  'recreational outing',
  'youth mixer event'
]
