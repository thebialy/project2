const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const { art, index } = this.props;
    return (
      <Layout title={art.title}>
        <div className="container">
          <div className="art-info">
            <div className="show-name text-center"><h2>{art.title}</h2></div>
            <br/>
            <div><img className="show-img art-info img-fluid" src={art.img}/></div> <br/>
            <div className="art-info">
                <p>{art.info}</p>
            </div>
            <br/>
            <div className="art-buttons d-flex justify-content-end">
              <form action={`/art/edit/${art._id}`} method="GET">
                <input type="submit" value="Edit"/>
              </form>
              <form action={`/art/${index}?_method=DELETE`} method="POST">
                  <input className="btn btn-danger" type="submit" value="Delete"/>
              </form>
              <button className="btn btn-light" ><a href={`/art/frame/${art._id}`}>Frame It!</a></button>
            </div>         
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
