import React, { Component, Fragment } from 'react';
import * as chirpService from '../services/chirps';
import 'isomorphic-fetch';
import 'es6-promise';

class NewChirp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: '',
			chirps: []
		};

		this.clearForm = () => {
			this.setState({
				content: ''
			});
		};
	}

	handleInput(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}

	handleForm(evt) {
		evt.preventDefault();
		chirpService.insert({ content: this.state.content });
		this.clearForm();
		location.reload();
	}

	render() {
		return (
			<Fragment>
				<button
					type="button"
					className="btn btn-primary float-right"
					data-toggle="modal"
					data-target="#exampleModalCenter"
				>
					Let's Chirp!
				</button>
				<div
					className="modal fade"
					id="exampleModalCenter"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalCenterTitle">
									Add New Chirp
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
											name="content"
											maxLength="150"
											className="form-control"
											placeholder="What's on your mind?"
											onChange={e => this.handleInput(e)}
											required
										/>
									</div>
								</form>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary btn-sm"
									data-dismiss="modal"
								>
									Close
								</button>
								<button
									type="submit"
									className="btn btn-primary btn-sm"
									onClick={e => this.handleForm(e)}
									data-dismiss="modal"
								>
									Chirp!
								</button>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default NewChirp;
