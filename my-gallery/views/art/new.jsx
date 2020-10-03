const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="The Title!">
          <h1 className="show-name text-center">Add New Piece of Art to myLouvre</h1> 
        <div className="login-box new-box">               
                <form action="/art/" method="POST">
                    <div className="user-box">
                        <input type="text" name="title"/>
                            <label>Title</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="artist"/>
                            <label>Artist</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="year"/>
                            <label>Year</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="technique"/>
                            <label>Technique</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="size"/>
                            <label>Size</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="img"/>
                            <label>Image URL</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="value"/>
                            <label>Value</label>
                    </div>
                    <div className="user-box">
                        <textarea name="info" cols="30" rows="3"></textarea> 
                            <label>Info</label>
                    </div>
                    <div><input type="submit" className="input-submit" value="Add to Collection"/></div>    
                </form>
            </div>            
      </Layout>
    );
  }
}

module.exports = Index;
