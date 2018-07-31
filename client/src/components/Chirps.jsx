import React, { Component } from 'react';
import moment from 'moment';

let url = '/api/chirps/';

class Chirps extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			chirp: '',
			chirps: []
		};

		this.editChirp = () => {
			$('#list').on('click', '.submit', function() {
				fetch(url + this.id + '/edit', {
					method: 'PUT',
					body: JSON.stringify({ chirp: $('#chirpInput').val() }),
					headers: new Headers({ 'Content-Type': 'application/json' })
				}).then(location.reload());
			});
		};

		this.deleteChirp = () => {
			$('#list').on('click', '.btn-danger', function() {
				fetch(url + this.id, {
					method: 'DELETE'
				}).then(() => {
					$(this)
						.parent()
						.parent()
						.remove();
				});
			});
		};
	}

	componentDidMount() {
		this.deleteChirp();
		this.editChirp();
	}

	onInputName(value) {
		this.setState({ name: value });
	}

	onInputPost(value) {
		this.setState({ chirp: value });
	}

	render() {
		return (
			<React.Fragment>
				<div className="col-6 offset-3">
					<div className="col-12">
						<div id="list" className="list-group d-flex flex-column-reverse">
							{this.props.value.map(chirp => {
								return (
									<div className="card mb-3" id={chirp._id} key={chirp._id}>
										<div className="card-body">
											<h6 className="card-title mb-0">{chirp.name}</h6>
											<p className="card-caption small">
												posted {moment(chirp.created_date).fromNow()}
											</p>
											<hr />
											<h6 className="card-text">{chirp.chirp}</h6>
										</div>
										<div className="card-footer text-muted">
											<button
												id={chirp._id}
												type="button"
												className="btn btn-sm btn-warning text-white"
												data-toggle="modal"
												data-target="#editBtn"
											>
												<i className="far fa-edit" />
											</button>
											<div
												className="modal fade"
												id="editBtn"
												tabIndex="-1"
												role="dialog"
												aria-labelledby="editBtnTitle"
												aria-hidden="true"
											>
												<div
													className="modal-dialog modal-dialog-centered"
													role="document"
												>
													<div className="modal-content">
														<div className="modal-header">
															<h5 className="modal-title" id="editBtnTitle">
																Edit Chirp
															</h5>
															<button
																type="button"
																className="close"
																data-dismiss="modal"
																aria-label="Close"
															>
																<span aria-hidden="true">&times;</span>
															</button>
														</div>
														<div className="modal-body">
															<form className="form-post">
																<div className="form-group">
																	<input
																		id="chirpInput"
																		name="chirp"
																		maxLength="150"
																		className="form-control"
																		placeholder={this.chirp}
																		onChange={e =>
																			this.onInputPost(e.target.value)
																		}
																		required
																	/>
																</div>
															</form>
														</div>
														<div className="modal-footer">
															<button
																type="button"
																className="btn btn-secondary"
																data-dismiss="modal"
															>
																Close
															</button>
															<button
																id={chirp._id}
																type="submit"
																className="btn btn-primary submit"
																data-dismiss="modal"
															>
																Submit
															</button>
														</div>
													</div>
												</div>
											</div>
											<button
												id={chirp._id}
												className="btn btn-sm btn-danger float-right"
											>
												<i className="far fa-trash-alt" />
											</button>
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
