'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  CHANNEL_URI: '"http://localhost:9000/example/ws/V1/"',
  REST_URI: '"http://localhost:8080/api/V1/"'
})
