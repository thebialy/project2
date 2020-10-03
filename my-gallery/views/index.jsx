const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="The Title!">
        <div className="container">
          <h1 className=""> Welcome to myLouve! A free web service that allows users to create a digital version of their very own Louvre. Simply signup and login to get started.</h1>
          <br/>
          <ul>
            <h3>New <span className="logo-my">my</span>Louve Features!</h3>
            <li>Total collection value - keeps a running total of the total value of your entire art collection</li>
            <li>Frame It! - allows user to see what the piece of art looks like in a frame with matting</li>
          </ul>
        </div>
        
      </Layout>
    );
  }
}

module.exports = Index;
