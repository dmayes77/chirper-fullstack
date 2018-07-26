import React, { Component, Fragment } from 'react';
import Post from './Post';

class App extends Component {
	render() {
		return (
			<Fragment>
				<main role="main">
					<div className="row jumbotron bg-primary justify-content-center">
						<h1 className="text-white display-3">Chirper</h1>
					</div>
					<Post />
				</main>
			</Fragment>
		);
	}
}
export default App;
