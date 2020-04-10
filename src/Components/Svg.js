import React from 'react';

export default function Svg(props) {
	return (
		<figure className="jobcard__image">
			<img src={props.template} />
		</figure>
	);
}
