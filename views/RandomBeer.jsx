const React = require('react');
const Layout = require('./Layout'); // require the Layout component

function Beers(props) {
  return (
    <Layout>
      <div>
        <img src={props.randomBeer[0].image_url} alt="" />
        <h1>{props.randomBeer[0].name}</h1>
        <h3>{props.randomBeer[0].tagline}</h3>
        <p>{props.randomBeer[0].description}</p>
        <ul>
          {props.randomBeer[0].food_pairing.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <p>{props.randomBeer[0].brewers_tips}</p>
      </div>
    </Layout>
  );
}

module.exports = Beers;
