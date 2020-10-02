const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="SIGNUP">
        <h1>Welcome! Signup to start adding art to your <span className="logo-my">my</span>Louve</h1>
        <div className="login-box">
          <form action="/auth/signup" method="post">
              <div className="user-box">
                <input type="text" name="username"/>
                  <label>Username</label>
              </div>  
              <div className="user-box">
                <input type="password" name="password"/>
                <label>Password</label>
              </div>
                <div><input type="submit" className="input-submit" value="signup"/></div>         
          </form>
        </div>
        
      </Layout>
    );
  }
}

module.exports = Index;
