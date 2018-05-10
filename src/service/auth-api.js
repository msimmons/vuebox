import axios from 'axios'

export class AuthApi {
  uri = ''
  api

  constructor (uri) {
    this.uri = uri
    this.api = axios.create({
      baseURL: uri,
      timeout: 1000,
      headers: {}
    })
  }

  signup (name, username, password) {
    return new Promise((resolve, reject) => {
      this.api.post('signup', { username: username, password: password }).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error.message)
      })
    })
  }

  verify (username, verifyCode) {
    return new Promise((resolve, reject) => {
      this.api.post('verify', { username: username, verifyCode: verifyCode }).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error.message)
      })
    })
  }

  login (username, password) {
    return new Promise((resolve, reject) => {
      this.api.post('login', { username: username, password: password }).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error.message)
      })
    })
  }
}
