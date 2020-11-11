const React = require('react');
const BeerCard = require('./components/BeerCard');
const Layout = require('./Layout'); // require the Layout component

function Beers(props) {
  return (
    <Layout>
      <div>
        {props.beersFromApi.map(beerObj => {
          return <BeerCard randomBeer={beerObj} hideDetails={true} />;
        })}
      </div>
    </Layout>
  );
}

module.exports = Beers;
