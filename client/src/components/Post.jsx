import React, { Component } from 'react';
import Chirps from './Chirps';

let url = '/api/chirps/';

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			chirp: '',
			chirps: []
		};

		this.clearForm = () => {
			this.setState({
				name: '',
				chirp: ''
			});
		};

		this.addChirp = () => {
			fetch(url)
				.then(response => response.json())
				.then(chirpsData => {
					this.setState({ chirps: chirpsData });
				});
		};

		this.newChirp = () => {
			fetch(url, {
				method: 'POST',
				body: JSON.stringify({
					name: this.state.name,
					chirp: this.state.chirp
				}),
				headers: new Headers({ 'Content-Type': 'application/json' })
			}).then(postChirp => this.addChirp(postChirp));
		};
	}

	componentDidMount() {
		this.addChirp();
	}

	onInputName(value) {
		this.setState({ name: value });
	}

	onInputPost(value) {
		this.setState({ chirp: value });
	}

	handleForm(event) {
		event.preventDefault();
		this.newChirp();
		this.clearForm();
	}

	render() {
		return (
			<React.Fragment>
				<div className="col-8 offset-2">
					<button
						type="button"
						className="btn btn-primary float-right"
						data-toggle="modal"
						data-target="#exampleModalCenter"
					>
						Let's Chirp!
					</button>
					<h3 className="my-4">Recent Posts</h3>
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
												name="name"
												placeholder="Name"
												className="form-control"
												value={this.state.name}
												onChange={e => this.onInputName(e.target.value)}
												required
												autoFocus
											/>
											<input
												name="chirp"
												maxLength="150"
												className="form-control"
												placeholder="Post 150 Character Max"
												value={this.state.chirp}
												onChange={e => this.onInputPost(e.target.value)}
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
										type="submit"
										className="btn btn-primary"
										onClick={e => this.handleForm(e)}
										data-dismiss="modal"
									>
										Chirp!
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Chirps value={this.state.chirps} />
			</React.Fragment>
		);
	}
}

export default Post;
