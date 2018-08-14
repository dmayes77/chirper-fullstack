import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ChirpCard from './chirpCard';
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
				<Link className="btn btn-primary float-right" to="/chirps/new">
					Let's Chirp!
				</Link>
				<h3 className="my-4">Recent Posts</h3>
				<div className="container">
					<div id="list" className="list-group d-flex flex-column-reverse">
						{chirps.map((chirp, i) => {
							return <ChirpCard key={i} chirp={chirp} />;
						})}
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Home;
