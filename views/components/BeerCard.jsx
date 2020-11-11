const React = require('react');

function BeerCard(props) {
  return (
    <div id="beerCard">
      <div id="imageDiv">
        <img src={props.randomBeer.image_url} alt="" />
      </div>
      <div id="allInfo">
        <div id="lessInfo">
          <h1>{props.randomBeer.name}</h1>
          <h3>{props.randomBeer.tagline}</h3>
          <p>{props.randomBeer.description}</p>
        </div>

        <div id="moreInfo">
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
      </div>
    </div>
  );
}

module.exports = BeerCard;
