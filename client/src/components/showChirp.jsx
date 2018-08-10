import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as chirpService from '../services/chirps';
import moment from 'moment';
import 'isomorphic-fetch';
import 'es6-promise';

class ShowChirp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chirp: []
		};
	}

	componentDidMount() {
		chirpService.one(this.props.match.params.id).then(chirp => {
			this.setState({ chirp });
		});
	}

	render() {
		const { chirp } = this.state;
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
							<Link
								to={{
									pathname: `/chirps/${chirp.id}/edit`,
									state: { content: chirp.content }
								}}
							>
								Edit
							</Link>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
export default ShowChirp;
