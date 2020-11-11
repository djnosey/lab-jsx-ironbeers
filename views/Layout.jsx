const React = require('react');

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>JSX Ironbeers</title>
        <link rel="stylesheet" href="/stylesheets/styles.css" />
      </head>
      <body>
        <nav id="navbar">
          <a href="/"> Home </a>
          <a href="/beers"> Beers </a>
          <a href="/random-beer"> Random Beer </a>
        </nav>

        {props.children}
      </body>
    </html>
  );
}

module.exports = Layout;
