import axios from 'axios'
import settle from 'axios/lib/core/settle'
import { AuthApi } from './auth-api'
import { Channel } from './channel'

const mockAdapter = (config) => {
  return new Promise((resolve, reject) => {
    var response = {
      data: {},
      status: 200,
      statusText: 'ok',
      headers: {},
      config: config,
      request: {}
    }
    settle(resolve, reject, response)
  })
}

const useMock = process.env.USE_MOCK

if (useMock) {
  console.log('Using Mock services ')
  axios.defaults.adapter = mockAdapter
}

const authApi = new AuthApi(process.env.REST_URI)
const channel = new Channel(process.env.CHANNEL_URI)

export { authApi, channel }
