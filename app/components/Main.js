// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Main = React.createClass({

  // Here we render the function
  render: function() {

    return (

      // <!-- Jumbotron -->
      <div className="jumbotron">
        <div className="container">
        <h1>NY Times Scraper</h1>
        <p>Get the latest news right here, right now!</p>
        </div>
      </div>
      <Navbar />
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
