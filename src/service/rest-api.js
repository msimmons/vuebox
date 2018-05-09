export class RestApi {
  uri = ''

  constructor (uri) {
    this.uri = uri
  }

  signup (name, username, password) {
    console.log('Signing up')
    return new Promise((resolve, reject) => {
      resolve({})
    })
  }

  verify (username, verifyCode) {
    console.log('Verifying')
    return new Promise((resolve, reject) => {
      resolve({profileId: '1234', token: '5678'})
    })
  }

  login (username, password) {
    console.log('Logging in')
    return new Promise((resolve, reject) => {
      resolve({profileId: '1234', token: '5678'})
    })
  }
}
