import EventBus from 'vertx3-eventbus-client'

class Channel {
  uri = ''
  token = ''
  eventBus

  constructor (uri) {
    this.uri = uri
  }

  connect (token) {
    console.log('Connecting to ' + this.uri)
    this.token = token
    return new Promise((resolve, reject) => {
      this.eventBus = new EventBus(this.uri + '?jwt=' + token)
      this.eventBus.enableReconnect(true)
      this.eventBus.onclose = (error) => {
        this.disconnect()
        reject(new Error(error.reason))
      }
      this.eventBus.onerror = (error) => {
        console.error('onerror: ' + JSON.stringify(error))
      }
      this.eventBus.onopen = () => {
        console.log('Connected')
        this.eventBus.onclose = (close) => {
          if (!close.wasClean) {
            console.log('Channel closed: ' + JSON.stringify(close))
          }
        }
        resolve()
      }
      this.eventBus.onreconnect = () => {
        console.log('Reconnecting...')
      }
    })
  }

  send (address, payload) {
    return new Promise((resolve, reject) => {
      if (!this.eventBus) {
        reject(new Error('Channel has not been opened'))
      } else {
        // Send message and receive reply
        this.eventBus.send(address, payload, {}, (error, response) => {
          if (error) {
            console.log('error: ' + JSON.stringify(error))
            reject(error)
          } else {
            resolve(response.body)
          }
        })
      }
    })
  }

  disconnect () {
    if (!this.eventBus) return
    try {
      this.eventBus.close()
    } catch (error) {
      console.error(error)
    }
    this.eventBus = null
  }
}

export let channel = new Channel(process.env.CHANNEL_URI)
