import React, { Component, Fragment } from 'react';
import IndexChirps from './indexChirps';
import NewChirp from './newChirp';
import * as chirpService from '../services/chirps';
import 'isomorphic-fetch';
import 'es6-promise';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chirps: []
		};
	}

	componentDidMount() {
		chirpService.all().then(chirps => {
			this.setState({ chirps });
		});
	}

	render() {
		const { chirps } = this.state;
		return (
			<Fragment>
				<div className="container">
					<NewChirp />
					<h3 className="my-4">Recent Posts</h3>
					<div className="container">
						<div id="list" className="list-group d-flex flex-column-reverse">
							{chirps.map(chirp => {
								return <IndexChirps key={chirp.id} chirp={chirp} />;
							})}
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Home;
