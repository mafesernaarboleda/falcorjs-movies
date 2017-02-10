var falcor = require('falcor')
var $ref = falcor.Model.ref

module.exports = {
  genreById: {
    1: {
      name: 'Action'
    },
    2: {
      name: 'Drama'
    },
    3: {
      name: 'Sci-Fi'
    },
    4: {
      name: 'Thriller'
    },
    5: {
      name: 'Adventure'
    },
    6: {
      name: 'Fantasy'
    },
    7: {
      name: 'History'
    },
    8: {
      name: 'Animation'
    },
    9: {
      name: 'Comedy'
    },
    10: {
      name: 'Family'
    },
    11: {
      name: 'Horror'
    },
    12: {
      name: 'Crime'
    }
  },
  movies: [{
    'title': 'Dawn of the Planet of the Apes',
    'image': 'http://api.androidhive.info/json/movies/1.jpg',
    'rating': 8.3,
    'releaseYear': 2014,
    'genre': [$ref('genreById[1]'), $ref('genreById[2]'), $ref('genreById[3]')]
  },
    {
      'title': 'District 9',
      'image': 'http://api.androidhive.info/json/movies/2.jpg',
      'rating': 8,
      'releaseYear': 2009,
      'genre': [$ref('genreById[1]'), $ref('genreById[3]'), $ref('genreById[4]')]
    },
    {
      'title': 'Transformers: Age of Extinction',
      'image': 'http://api.androidhive.info/json/movies/3.jpg',
      'rating': 6.3,
      'releaseYear': 2014,
      'genre': [$ref('genreById[1]'), $ref('genreById[5]'), $ref('genreById[3]')]
    },
    {
      'title': 'X-Men: Days of Future Past',
      'image': 'http://api.androidhive.info/json/movies/4.jpg',
      'rating': 8.4,
      'releaseYear': 2014,
      'genre': [$ref('genreById[1]'), $ref('genreById[3]'), $ref('genreById[4]')]
    },
    {
      'title': 'The Machinist',
      'image': 'http://api.androidhive.info/json/movies/5.jpg',
      'rating': 7.8,
      'releaseYear': 2004,
      'genre': [$ref('genreById[2]'), $ref('genreById[4]')]
    },
    {
      'title': 'The Last Samurai',
      'image': 'http://api.androidhive.info/json/movies/6.jpg',
      'rating': 7.7,
      'releaseYear': 2003,
      'genre': [$ref('genreById[1]'), $ref('genreById[2]'), $ref('genreById[7]')]
    },
    {
      'title': 'The Amazing Spider-Man 2',
      'image': 'http://api.androidhive.info/json/movies/7.jpg',
      'rating': 7.3,
      'releaseYear': 2014,
      'genre': [$ref('genreById[1]'), $ref('genreById[5]'), $ref('genreById[6]')]
    },
    {
      'title': 'Tangled',
      'image': 'http://api.androidhive.info/json/movies/8.jpg',
      'rating': 7.9,
      'releaseYear': 2010,
      'genre': [$ref('genreById[1]'), $ref('genreById[2]'), $ref('genreById[3]')]
    },
    {
      'title': 'Rush',
      'image': 'http://api.androidhive.info/json/movies/9.jpg',
      'rating': 8.3,
      'releaseYear': 2013,
      'genre': [$ref('genreById[8]'), $ref('genreById[9]'), $ref('genreById[10]')]
    },
    {
      'title': 'Drag Me to Hell',
      'image': 'http://api.androidhive.info/json/movies/10.jpg',
      'rating': 6.7,
      'releaseYear': 2009,
      'genre': [$ref('genreById[11]'), $ref('genreById[4]')]
    },
    {
      'title': 'Despicable Me 2',
      'image': 'http://api.androidhive.info/json/movies/11.jpg',
      'rating': 7.6,
      'releaseYear': 2013,
      'genre': [$ref('genreById[8]'), $ref('genreById[9]'), $ref('genreById[10]')]
    },
    {
      'title': 'Kill Bill: Vol. 1',
      'image': 'http://api.androidhive.info/json/movies/12.jpg',
      'rating': 8.2,
      'releaseYear': 2003,
      'genre': [$ref('genreById[1]'), $ref('genreById[12]')]
    },
    {
      'title': "A Bug's Life",
      'image': 'http://api.androidhive.info/json/movies/13.jpg',
      'rating': 7.2,
      'releaseYear': 1998,
      'genre': [$ref('genreById[8]'), $ref('genreById[5]'), $ref('genreById[9]')]
    },
    {
      'title': 'Life of Brian',
      'image': 'http://api.androidhive.info/json/movies/14.jpg',
      'rating': 8.9,
      'releaseYear': 1972,
      'genre': [$ref('genreById[9]')]
    },
    {
      'title': 'How to Train Your Dragon',
      'image': 'http://api.androidhive.info/json/movies/15.jpg',
      'rating': 8.2,
      'releaseYear': 2010,
      'genre': [$ref('genreById[8]'), $ref('genreById[5]'), $ref('genreById[10]')]
    }]
}
