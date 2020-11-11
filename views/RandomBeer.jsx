const React = require('react');
const Layout = require('./Layout'); // require the Layout component
const BeerCard = require('./components/BeerCard');
function RandomBeer(props) {
    
  return (
    <Layout>
      <BeerCard randomBeer={props.randomBeer} />
    </Layout>
  );
}

module.exports = RandomBeer;
