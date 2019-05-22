import axios from 'axios';

const KEY = "AIzaSyB-vYO-C4dMvRnOKl1QKvZ348H0Pm3-VgA";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})