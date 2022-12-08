import axios from 'axios'

export const fetchCrimes = async () => {
  try {
    const result = await axios.get('Enter crime data URL here')
    console.log(result)
  } catch (error) {
    console.log('We have an error', error)
    return 
  }
}