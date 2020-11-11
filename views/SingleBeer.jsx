const React = require('react');
const Layout = require('./Layout');
const BeerCard = require('./components/BeerCard');

function SingleBeer(props) {
  return (
    <Layout>
      <BeerCard randomBeer={props.beer} />
    </Layout>
  );
}

module.exports = SingleBeer;
