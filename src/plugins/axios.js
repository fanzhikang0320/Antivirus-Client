import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://www.thebestantivirus.news'
})

export default instance;