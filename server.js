const falcor = require('falcor')
const falcorExpress = require('falcor-express')
const Router = require('falcor-router')
const express = require('express')
const _ = require('lodash')
const app = express()
const db = require('./db.js')
const falcorRouterDemoFactory = require('falcor-router-demo')

app.use(express.static('.'))

app.use('/model.json', falcorExpress.dataSourceRoute(function (req, res) {
  return new Router([
    {
      route: 'movies',
      get: function () {
        return {
          path: ['movies'],
          value: db.movies
        }
      }
    }
  ])
}))

app.listen(3000)
console.log('Listening on http://localhost:3000')
