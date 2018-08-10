import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home';
import ShowChirp from './showChirp';
import EditChirp from './editChirp';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import AuthButton from './auth/authButton';

class App extends Component {
	render() {
		return (
			<Router>
				<Fragment>
					<main role="main">
						<div className="row jumbotron bg-primary justify-content-center">
							<h1 className="text-white display-3">Chirper</h1>
						</div>
						<AuthButton />
						<Switch>
							<Route exact path="/" component={Home} />
							{/* Will eventually become a landing page */}
							<Route exact path="/chirps" component={Home} />
							<PrivateRoute exact path="/chirps/:id" component={ShowChirp} />
							<PrivateRoute
								exact
								path="/chirps/:id/edit"
								component={EditChirp}
							/>
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
