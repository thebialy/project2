const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const { art } = this.props
    return (
      <Layout title="My Gallery">
        <h1> My Gallery </h1>
        <a href="/art/new"><button>New Art</button></a>
        {art.map(art => (
        <h2>{art.title}</h2>
        ))}
      </Layout>
    );
  }
}

module.exports = Index;