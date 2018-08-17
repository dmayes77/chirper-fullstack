import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';
import moment from 'moment';
import 'isomorphic-fetch';
import 'es6-promise';

class ChirpCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { chirp } = this.props;
		return (
			<Fragment>
				<div className="card mb-3">
					<div className="card-body py-2">
						<div className="row mx-0">
							<div className="float-left mr-2 mb-0 h2 d-flex align-items-start">
								<i className="far fa-user-circle" />
							</div>
							<div>
								<h6 className="mb-0 small">
									<Link
										to={{
											pathname: `/chirps/users/${chirp.userid}/`,
											state: { username: chirp.username }
										}}
									>
										@{chirp.username}
									</Link>
								</h6>
								<p className="mb-0 small">
									posted {moment(chirp._created).fromNow()}
								</p>
							</div>
						</div>
						<hr className="mt-2 mb-3" />
						<h6 className="card-text">{chirp.content}</h6>
						<small className="float-right">3 comments</small>
						<Link className="small" to={`/chirps/${chirp.id}`}>
							<i className="fab fa-readme mr-1" />
							Read
						</Link>
					</div>
					<Footer chirp={chirp} />
				</div>
			</Fragment>
		);
	}
}

export default ChirpCard;
