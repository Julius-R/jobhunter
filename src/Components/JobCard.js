import React from 'react';
import Svg from './Svg';

const Tag = (props) => {
	return <p className="tag">{props.tag}</p>;
};

const isNew = true;
const isFeatured = true;

export default function JobCard(props) {
	return (
		<article className="jobcard">
			<Svg template={props.imgSrc} />
			<section className="jobcard__details">
				<p>
					Photosnap {isNew && <span>NEW!</span>}{' '}
					{isFeatured && <span>FEATURED</span>}
				</p>
				<p className="bold">Senior Dev</p>
				<ul className="date-info">
					<li>1d Ago</li>
					<li>Full Time</li>
					<li>USA Only</li>
				</ul>
			</section>
			<section className="jobcard__tags">
				<Tag key={'CSS'} tag={'CSS'} /> <Tag tag={'JavaScript'} />
			</section>
		</article>
	);
}
