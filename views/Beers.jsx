const React = require('react');
const BeerCard = require('./components/BeerCard');
const Layout = require('./Layout'); // require the Layout component

function Beers(props) {
  return (
    <Layout>
      <div>
        {props.beersFromApi.map(beerObj => {
          return (
            <a href={`/beer/${beerObj.id}`}>
              <BeerCard randomBeer={beerObj} hideDetails={true} />
            </a>
          );
        })}
      </div>
    </Layout>
  );
}

module.exports = Beers;
