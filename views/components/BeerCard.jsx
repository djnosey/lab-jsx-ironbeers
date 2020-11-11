const React = require('react');

function BeerCard(props) {
  return (
    <div>
      <img src={props.randomBeer.image_url} alt="" />
      <h1>{props.randomBeer.name}</h1>
      <h3>{props.randomBeer.tagline}</h3>
      <p>{props.randomBeer.description}</p>

      {props.hideDetails ? null : (
        <div>
          {' '}
          <ul>
            {props.randomBeer.food_pairing.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
          <p>{props.randomBeer.brewers_tips}</p>{' '}
        </div>
      )}
    </div>
  );
}

module.exports = BeerCard;
