import axios from 'axios';
const KEY = 'AIzaSyDAdn1dP4hJ4cX2jzdqU5gL1k6gcc5syGs';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: `${KEY}`
  }
});
