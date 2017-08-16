// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Navbar = React.createClass({
  render: function() {
    return (
		<nav id="navbar">
		  <a href="/" type="button" class="btn btn-default">Home</a>
		  <a href="/saved" type="button" class="btn btn-default">Saved Articles</a>
		  <a type="button" class="btn btn-danger" id="scrape">Scrape New Articles!</a>
		</nav>
	);
  }
});

module.exports = Navbar;
