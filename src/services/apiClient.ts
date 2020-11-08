import axios from 'axios'

const api = axios.create({
  baseURL: 'https://tx2ls-sms.herokuapp.com',
})
api.interceptors.request.use(
  async config => {
    const token = localStorage.getItem('@Tx2ls-SMS:token')

    config.headers = {
      Authorization: `Bearer ${token}`,
    }
    return config
  },
  error => {
    Promise.reject(error)
  },
)

export default api
