import axios from 'axios';
import { url, apiKey } from '../constants';


const movieDB = axios.create({
    baseURL: url,
    params: {
        api_key: apiKey,
        language: 'en-US',
    }
})

export default movieDB