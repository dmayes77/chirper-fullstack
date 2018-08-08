import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'isomorphic-fetch';
import 'es6-promise';

class ShowChirp extends Component {
	constructor(props) {
		super(props);
		this.state = { chirps: [] };
		this.url = `/api/chirps/${this.props.match.params.id}`;
	}

	componentDidMount() {
		fetch(this.url)
			.then(result => result.json())
			.then(chirp => {
				this.setState({ chirps: chirp });
			});
	}

	render() {
		let chirp = this.state.chirps;
		return (
			<Fragment>
				<div className="container">
					<div className="card mb-3">
						<div className="card-body">
							<h6 className="card-title mb-0">@dmayes77</h6>
							<p className="card-caption small">
								posted {moment(chirp._created).fromNow()}
							</p>
							<hr />
							<h6 className="card-text">{chirp.content}</h6>
						</div>
						<div className="card-footer">
							<Link to={`/chirps/${chirp.id}/edit`}>Edit</Link>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
export default ShowChirp;
