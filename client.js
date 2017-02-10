const model = new falcor.Model({source: new falcor.HttpDataSource('/model.json')})

  .get(['movies', 'byTitle', ['Transformers: Age of Extinction'], ['title', 'releaseYear', 'image']])
  .then(function (response) {
    var movies = response.json.movies.byTitle
    var source = document.getElementById('movie-template').innerHTML
    var template = Handlebars.compile(source)
    document.getElementById('data').innerHTML = template(movies)
  }, function (err) {
    console.log(err)
  })
