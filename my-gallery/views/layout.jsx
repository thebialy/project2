const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/style.css"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
          <link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap" rel="stylesheet"></link>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
          <script src="/js/app.js"></script>
        </head>
        <body>
          <header>
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="/"><span className="logo-my">my</span>Louvre</a>
                </div>
                <ul className="nav navbar-nav">
                  <li><a href="/art/">My Collection</a></li>
                  <li><a href="/art/new">Add to Collection</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="/auth/signup"><span class="glyphicon glyphicon-user"></span>Sign Up</a></li>
                  <li><a href="/auth/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                  <li><a href="/auth/logout"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
                </ul>
              </div>
            </nav>
          </header>
          <main>{this.props.children}</main>
          <footer>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;