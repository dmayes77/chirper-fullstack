import React, { Component } from 'react';
import moment from 'moment';

class Chirps extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="col-8 offset-2">
					<div className="col-12">
						<div id="list" className="list-group d-flex flex-column-reverse">
							{this.props.value.map(chirp => {
								return (
									<div className="card mb-3" id={chirp._id} key={chirp._id}>
										<div className="card">
											<div className="card-body">
												<h5 className="card-title mb-0">{chirp.name}</h5>
												<p className="card-caption small">
													posted {moment(chirp.created_date).fromNow()}
												</p>
												<hr />
												<p className="card-text">{chirp.chirp}</p>
												<a href="#" className="float-right">
													View
												</a>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Chirps;
