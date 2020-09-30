const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const { art } = this.props;
    return (
      <Layout title="The Title!">
        <form action="/art/" method="post">
          <input type="text" placeholder="artwork title here" name="title"/>
          <input type="submit" value="create art"/>
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
