const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="The Title!">
        <div className="container"> 
                <h1 className="show-name text-center">Add New Piece of Art to myLouvre</h1>               
                <form className="form-horizontal" action="/art/" method="POST">
                    <div className="form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text input">Title</span>
                        </div>
                        <div className="col-sm-10">
                            <input className="form-control" type="text" name="title"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text input text-center">Artist</span>
                        </div>
                        <div className="col-sm-10">
                            <input className="form-control" type="text" name="artist"></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text input">Year</span>
                        </div>
                        <div className="col-sm-10">
                        <input className="form-control" type="text" name="year"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text input">Technique</span>
                        </div>
                        <div className="col-sm-10">
                        <input className="form-control" type="text" name="technique"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text input">Size</span>
                        </div>
                        <div className="col-sm-10">
                        <input className="form-control" type="text" name="size"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text input">Info</span>
                        </div>
                        <div className="col-sm-10">
                          <textarea className="form-control" type="text" name="info"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text input">Image</span>
                        </div>
                        <div className="col-sm-10">
                          <input className="form-control" type="text" name="img"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text input">Value</span>
                        </div>
                        <div className="col-sm-10">
                          <input className="form-control" type="text" name="value"/>
                        </div>
                    </div>
                    <input className="col-sm-3 text-center btn btn-primary btn-lg btn-block" type="submit" name="" value="Add to collection"/>                      
                </form>
            </div>            
      </Layout>
    );
  }
}

module.exports = Index;
