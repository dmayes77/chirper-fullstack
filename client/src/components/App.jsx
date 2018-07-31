import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Post from './Post';

class App extends Component {
	render() {
		return (
			<Router>
				<Fragment>
					<main role="main">
						<div className="row jumbotron bg-primary justify-content-center">
							<h1 className="text-white display-3">Chirper</h1>
						</div>
						<Switch>
							<Route exact path="/" component={Post} />
							<Route exact path="/chirps" component={Post} />
						</Switch>
					</main>
				</Fragment>
			</Router>
		);
	}
}
export default App;
