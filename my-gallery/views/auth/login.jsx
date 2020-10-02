const React = require("react");
const Layout = require("../layout.jsx");

class Login extends React.Component {
  render() {
    return (
      <Layout title="LOGIN">
        <h1 className="welcome-h1">Welcome! Login to access your <span className="logo-my">my</span>Louve</h1>
        <div className="login-box"> 
          <form action="/auth/login" method="post">
            <div className="user-box">
              <input type="text" name="username"/>
              <label>Username</label>
            </div>
            <div className="user-box">
              <input type="password" name="password"/>
              <label>Password</label>
            </div>    
            <div><input className="input-submit" type="submit" value="login"/></div>
          </form>
        </div>
      </Layout>
    );
  }
}

module.exports = Login;
