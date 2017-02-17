import axios from 'axios'


export const getAuthToken = () => {
  if(window.sessionStorage.authToken) {
    return ` JWT ${window.sessionStorage.getItem('authToken')}`
  } else {
    return ''
  }
}


const api = axios.create({
  baseURL: 'http://localhost:8000/',
  timeout: 3000,
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken'
})

api.interceptors.request.use(config => {
  config.headers['Authorization'] = getAuthToken()
  return config
}, error => {
  return Promise.reject(error)
})

export default api
