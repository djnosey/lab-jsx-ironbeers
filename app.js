const { response } = require('express');
const express = require('express');
const erv = require('express-react-views');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

// VIEW ENGINE SETUP
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', erv.createEngine());

// MIDDLEWARE
app.use(express.static(__dirname + '/public'));

app.use('/beer', function (req, res, next) {
  console.dir(req.originalUrl);
  console.dir(req.baseUrl);
  console.dir(req.path);
  next();
});

// Add the route handlers here:

app.get('/beer/:id', (req, res) => {
  const id = req.params.id;
  punkAPI.getBeers(id).then(beerlist => {
    const beer = beerlist[id - 1];
    const data = { beer: beer };
    res.render('SingleBeer', data);
  });
});

app.get('/', (req, res) => {
  res.render('Home');
});

app.get('/beers', (req, res, next) => {
  punkAPI.getBeers().then(beersFromApi => {
    const data = { beersFromApi: beersFromApi };
    res.render('Beers', data);
  });
});

app.get('/random-beer', (req, res, next) => {
  punkAPI.getRandom().then(responseFromApi => {
    const data = { randomBeer: responseFromApi[0] };
    res.render('RandomBeer', data);
  });
});

app.listen(3000, () => {
  console.log('🏃‍ on port 3000');
});
