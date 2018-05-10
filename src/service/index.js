import axios from 'axios'

const mockAdapter = (config) => {
  return new Promise((resolve, reject) => {
    console.log('Mock Handling', config)
    var response = {
      data: {},
      status: 200,
      statusText: 'ok',
      headers: {},
      config: config,
      request: {}
    }
    resolve(response)
    // settle(resolve, reject, response)
  })
}

const useMock = process.env.USE_MOCK

if (useMock) {
  console.log('Setting global mock adapter')
  axios.defaults.adapter = mockAdapter
}

export default useMock
