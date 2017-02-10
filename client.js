const model = new falcor.Model({source: new falcor.HttpDataSource('/model.json')})

model.get(['movies', 'byGenre', ['Action'], ['title']])
  .then(function (response) {
    console.log(response)
    var movies = response.json.movies.byGenre
    var source = document.getElementById('movie-template').innerHTML
    var template = Handlebars.compile(source)
    document.getElementById('data').innerHTML = template(movies)
  }, function (err) {
    console.log(err)
  })
