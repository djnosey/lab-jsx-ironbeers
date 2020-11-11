const React = require('react');
const Layout = require('./Layout');

function Home() {
  return (
    <Layout>
      <main>
        <h1>Home</h1>
        <img src="/images/beer.png" alt="" />
        <a href="/beers">check the beers</a>
        <a href="/random-beer">Check a random beer</a>
      </main>
    </Layout>
  );
}

module.exports = Home;
