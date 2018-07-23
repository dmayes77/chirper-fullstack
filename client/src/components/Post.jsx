import React, { Component } from 'react';
import Chirps from './Chirps';

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
			fetch('/api/chirps')
				.then(response => response.json())
				.then(chirpsData => {
					this.setState({ chirps: chirpsData });
				});
		};
		this.deleteChirp = this.deleteChirp.bind(this);
	}

	componentDidMount() {
		this.addChirp();
		this.deleteChirp();
	}

	onInputName(value) {
		this.setState({ name: value });
	}

	onInputPost(value) {
		this.setState({ chirp: value });
	}

	handleForm(event) {
		event.preventDefault();
		fetch('/api/chirps', {
			method: 'POST',
			body: JSON.stringify({
				name: this.state.name,
				chirp: this.state.chirp
			}),
			headers: new Headers({ 'Content-Type': 'application/json' })
		}).then(newChirp => this.addChirp(newChirp));
		this.clearForm();
	}

	deleteChirp() {
		$('.list-group').on('click', 'button', function() {
			console.log(
				$(this)
					.parent()
					.data('id')
			);
			// fetch(url, {
			// 	method: 'DELETE',
			// 	headers: new Headers({ 'Content-Type': 'application/json' })
			// });
		});
	}
	// let url = '/api/chirps/' + this.props.match.params.id;
	// fetch(url, {
	// 	method: 'DELETE',
	// 	headers: new Headers({ 'Content-Type': 'application/json' })
	// }).then(this.props.history.push('/'));
	render() {
		return (
			<React.Fragment>
				<Chirps value={this.state.chirps} />
				<div className="col-8 offset-2 mt-4">
					<h3 className="text-center mb-4">Add New Post</h3>
					<form className="form-post" onSubmit={e => this.handleForm(e)}>
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
						<div className="form-group text-center">
							<button type="submit" className="btn btn-lg btn-primary px-5">
								Submit!
							</button>
						</div>
					</form>
				</div>
			</React.Fragment>
		);
	}
}

export default Post;
