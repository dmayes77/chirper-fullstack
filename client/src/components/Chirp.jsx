import React from 'react';

const Chirp = props => {
	return (
		<React.Fragment>
			<li id={props._id} className="list-group-item">
				{props.name} - {props.chirp}
				<button className="btn btn-danger small">x</button>
			</li>
		</React.Fragment>
	);
};
export default Chirp;
