import React from 'react';
export default function Header(props) {
	return (
		<header className="header">
			{props.isVisible && (
				<section className="filteTab">
					<ul className="filterTags">
						<li>
							<p>For</p>
							<button className="removeTag">X</button>
						</li>
						<li>
							<p>FElk</p>
							<button className="removeTag">X</button>
						</li>
						<li>
							<p>EFnwlrj</p>
							<button className="removeTag">X</button>
						</li>
					</ul>
					<button className="clearBtn">Clear</button>
				</section>
			)}
		</header>
	);
}
