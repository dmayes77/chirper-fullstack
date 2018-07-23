import React, { Component } from 'react';
import Post from './Post';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<main role="main">
					<div className="row jumbotron bg-primary justify-content-center">
						<h1 className="text-white display-3">Chirper</h1>
					</div>
					<Post />
				</main>
			</React.Fragment>
		);
	}
}
export default App;
