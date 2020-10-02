const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const { art } = this.props
    return (
      <Layout title="My Gallery">
        <h1> My Gallery </h1>     
        <h2>{art.title}</h2>
          <div className="frame">
            <div className="mat">
              <div className="art">
                <img className="art-image img-fluid" src={art.img}/>
              </div>
            </div>
          </div>
      </Layout>
    );
  }
}

module.exports = Index;