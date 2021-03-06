import axios from 'axios';

const apiClient = axios.create({
   baseURL: 'https://my-json-server.typicode.com/Hiteple/vue3-mocked-db',
   withCredentials: false,
   headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
   }
});

export default {
   getEvents() {
      return apiClient.get('/events');
   },
   getSingleEvent(id) {
      return apiClient.get(`/events/${id}`);
   }
}