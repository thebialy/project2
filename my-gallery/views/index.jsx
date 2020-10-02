const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="The Title!">
        <div className="container">
          <h1> Welcome to <span className="logo-my">my</span>Louve! A free web service that allows users to create a digital version of their very own Louvre. Simply signup and login to get started.</h1>
          <br/>
          <ul>
            <h3>New <span className="logo-my">my</span>Louve Features!</h3>
            <li></li>
          </ul>
        </div>
        
      </Layout>
    );
  }
}

module.exports = Index;
