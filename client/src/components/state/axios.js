import axios from 'axios';

const instance= axios.create({
    baseURL: "https://short-reel.onrender.com"
})

export default instance
