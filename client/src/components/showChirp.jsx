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
				<h3 className="my-4">View Post</h3>
				<div className="container">
					<div className="card mb-3">
						<div className="card-body py-2">
							<div className="float-left mr-2 h2">
								<i className="far fa-user-circle" />
							</div>
							<h6 className="mb-0 small">@dmayes77</h6>
							<p className="mb-0 small">
								posted {moment(chirp._created).fromNow()}
							</p>
							<hr className="mt-2 mb-3" />
							<h6 className="card-text">{chirp.content}</h6>
							<small className="float-right">3 comments</small>
						</div>
						<div className="card-footer text-muted d-flex justify-content-around">
							<Link
								className="small"
								to={{
									pathname: `/chirps/${chirp.id}/edit`,
									state: { content: chirp.content }
								}}
							>
								<i className="far fa-edit mr-1" />
								Edit
							</Link>
							<Link className="small" to={`/chirps/${chirp.id}/delete`}>
								<i className="fas fa-trash-alt mr-1" /> Delete
							</Link>
						</div>
					</div>
				</div>
				<Link to={`/chirps`}>
					<i className="fas fa-angle-double-left" /> Back
				</Link>
			</Fragment>
		);
	}
}
export default ShowChirp;
