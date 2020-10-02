const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const { art, user } = this.props
    return (
      <Layout title="My Gallery">
        <h1> {user}'s Gallery </h1>
        <div className="art-index">
          {art.map((art) => {
            return <div className="text-center art-div">
              <div className="index-title"><h4>{art.title}</h4></div>   
                <div><a href={`/art/${art._id}`}><img src={art.img}/></a></div>        
                {/* <form action={`/art/${art._id}?_method=DELETE`} method="POST">
                  <input type="submit" value="Delete"/>
                </form>
                <form action={`/art/edit/${art._id}`} method="GET">
                  <input type="submit" value="Edit"/>
                </form> */}
            </div>
          })}
        </div>
      </Layout>
    );
  }
}

module.exports = Index;