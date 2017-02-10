const model = new falcor.Model({source: new falcor.HttpDataSource('/model.json')})

  .get(['genreById', [1, 2, 5, 4, 8] , ['name']])
  .then(function (response) {
    var movies = response.json.genreById
    var source = document.getElementById('movie-template').innerHTML
    var template = Handlebars.compile(source)
    document.getElementById('data').innerHTML = template(movies)
  }, function (err) {
    console.log(err)
  })
