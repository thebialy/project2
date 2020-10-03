const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const { art } = this.props;
    return (
      <Layout title="Edit Art">
        <div className="login-box new-box">
        <form action={`/art/edit/${art._id}?_method=PUT`} method="post">
        <div className="user-box">
          <input value={art.title} type="text" name="title"/>
                  <label>Title</label>
          </div>
          <div className="user-box">
              <input value={art.artist} type="text" name="artist"/>
                  <label>Artist</label>
          </div>
          <div className="user-box">
              <input value={art.year} type="text" name="year"/>
                  <label>Year</label>
          </div>
          <div className="user-box">
              <input value={art.technique}type="text" name="technique"/>
                  <label>Technique</label>
          </div>
          <div className="user-box">
              <input value={art.size}type="text" name="size"/>
                  <label>Size</label>
          </div>
          <div className="user-box">
              <input value={art.img} type="text" name="img"/>
                  <label>Image URL</label>
          </div>
          <div className="user-box">
              <input value={art.value} type="text" name="value"/>
                  <label>Value</label>
          </div>
          <div className="user-box">
              <textarea value={art.info}name="info" cols="30" rows="3"></textarea> 
                  <label>Info</label>
          </div>
          <div><input type="submit" className="input-submit" value="Edit"/></div>
        </form>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
