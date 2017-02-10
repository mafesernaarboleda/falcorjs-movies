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
    },
    {
      route: "movies.byTitle[{keys}]['title', 'releaseYear', 'image']",
      get: function (pathSet) {
        let results = []
        pathSet[2].forEach(function (title) {
          db.movies.forEach(function (movie) {
            if (_.contains(movie.title, title)) {
              results.push({
                path: ['movies', 'byTitle', title],
                value: movie
              })
            }
          })
        })
        return results
      }
    },
    {
      route: "genreById[{integers:genreId}]['name']",
      get: function (pathSet) {
        let results = []
        pathSet[1].forEach(function (genreId) {
          results.push({
            path: ['genreById', genreId],
            value: db.genreById[genreId]
          })
        })
        return results
      }
    },
    {
      route: "movies.byGenre[{keys}]['title']",
      get: function (pathSet) {
        let results = []
        pathSet[2].forEach(function (gender) {
          db.movies.forEach(function (movie) {
            console.log(movie.genre.name)

            if (_.contains(movie.genre.name, gender)) {
              results.push({
                path: ['movies', 'byGenre', byGenre],
                value: movie
              })
            }
          })
        })
        return results
      }
    }

  ])
}))

app.listen(3000)
console.log('Listening on http://localhost:3000')
