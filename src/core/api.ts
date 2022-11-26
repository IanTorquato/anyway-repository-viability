import { notification } from 'antd'
import axios, { AxiosError } from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com/repos',
  timeout: 1000 * 16, // 16 seconds
  timeoutErrorMessage: 'Custom timeout exceeded',
})

api.interceptors.response.use(undefined, error => {
  if (error instanceof AxiosError && error.response) {
    if (error.message === 'Custom timeout exceeded') {
      notification.warning({ message: 'Tempo de requisição excedido!' })
    }
  }

  return Promise.reject(error)
})

export { api }
