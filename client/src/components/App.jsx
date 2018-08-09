import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home';
import ShowChirp from './showChirp';
import EditChirp from './editChirp';
import Login from './auth/login';
import Logout from './auth/logout';

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
							<Route exact path="/" component={Home} />
							<Route exact path="/chirps" component={Home} />
							<Route exact path="/chirps/:id" component={ShowChirp} />
							<Route exact path="/chirps/:id/edit" component={EditChirp} />
							<Route path="/login" component={Login} />
							<Route path="/logout" component={Logout} />
						</Switch>
					</main>
				</Fragment>
			</Router>
		);
	}
}
export default App;
