import axios from 'axios';

const saintsUrl = `http://localhost:3000/saints`
const readAll = () => {
    const request = axios.get(saintsUrl)
    return request.then(response => response.data);
}

export default {readAll};