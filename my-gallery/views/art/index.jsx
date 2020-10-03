const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const { art, user } = this.props
    const totalValue = art.reduce((total, item) => {
      return total += Number(item.value)
    },0)
    return (
      <Layout title="My Gallery">
        <div className="header-div">          
          <h1 className="index-title user-title container"> {user}'s Gallery </h1>
          <h4 className="text-left collection">Your total collection value</h4>
          <h1 className="total-value">${totalValue}</h1>
        </div>
        
        <div className="art-index">
          {art.map((art) => {
            return <div className="text-center art-div">
              <div className="index-title"><h3>{art.title}</h3></div>   
              <br/>
                <div><a href={`/art/${art._id}`}><img src={art.img}/></a></div>        
        </div>
          })}
        </div>
      </Layout>
    );
  }
}

module.exports = Index;