const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const { art } = this.props;
    return (
      <Layout title="Edit Art">
        <form action={`/art/edit/${art._id}?_method=PUT`} method="post">
          <input type="text" value={art.title} placeholder="artwork title here" name="title"/>
          <input type="text" value={art.artist} placeholder="artwork title here" name="artist"/>
          <input type="text" value={art.year} placeholder="artwork title here" name="year"/>
          <input type="text" value={art.technique} placeholder="artwork title here" name="technique"/>
          <input type="text" value={art.size} placeholder="artwork title here" name="size"/>
          <input type="text" value={art.info} placeholder="artwork title here" name="info"/>
          <input type="text" value={art.img} placeholder="artwork title here" name="img"/>
          <input type="text" value={art.value} placeholder="artwork title here" name="value"/>
          <input type="submit" value="edit art"/>
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
