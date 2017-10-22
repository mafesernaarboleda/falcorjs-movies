const falcor = require('falcor')
const falcorExpress = require('falcor-express')
const Router = require('falcor-router')
const express = require('express')
const _ = require('lodash')
const app = express()
const db = require('./db.js')
const falcorRouterDemoFactory = require('falcor-router-demo')

app.use(express.static('.'))

var model = new falcor.Model({
  user : {
    'name': "1"
  }
})

var router = new Router([
  {
    route: "user['name','surname','address']",
    get(pathSet) {
      userService.
        getUser(getUserID()).
        then(function(user) {
          return pathSet[1].
            map(function(userKey) {
              // return response for each individual requested path
              return {
                path: ["user", userKey],
                value: user[userKey]
              };
            });
         });
    }
  }
]);

app.listen(3000)
console.log('Listening on http://localhost:3000')
