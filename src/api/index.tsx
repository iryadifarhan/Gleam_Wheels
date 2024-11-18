//import axios
import axios from 'axios';

const Api = axios.create({
    //set default endpoint API
    baseURL: 'https://gleam-wheels-backend.vercel.app/api'
})

export default Api