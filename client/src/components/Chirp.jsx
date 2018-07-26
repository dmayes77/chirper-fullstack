import React from 'react';

const Chirp = props => {
	return (
		<React.Fragment>
			<li id={props.id} className="list-group-item">
				<span>
					{props.name} - {props.chirp}
				</span>
				<button id={props.id} className="btn btn-danger small">
					<i className="far fa-trash-alt" />
				</button>
			</li>
		</React.Fragment>
	);
};
export default Chirp;
