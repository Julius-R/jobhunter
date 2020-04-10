import React from 'react';
import Header from './Header';
import JobCard from './JobCard';

import Photosnap from '../assets/images/photosnap.svg';
import Manage from '../assets/images/manage.svg';
import Account from '../assets/images/account.svg';
import MyHome from '../assets/images/myhome.svg';
import LoopStudios from '../assets/images/loop-studios.svg';
import FaceIt from '../assets/images/faceit.svg';
import Shortly from '../assets/images/shortly.svg';
import Insure from '../assets/images/insure.svg';
import EyecamCo from '../assets/images/eyecam-co.svg';
import TheAirFilterCompany from '../assets/images/the-air-filter-company.svg';

// let imgSrc = {
// 	Photosnap,
// 	Manage,
// 	Account,
// 	MyHome,
// 	LoopStudios,
// 	FaceIt,
// 	Shortly,
// 	Insure,
// 	EyecamCo,
// 	TheAirFilterCompany,
// };

let rst = 'My Home';
let ost = 'The Air Filter Company';

const removeWhitespace = (val) => {
	let me = val.split(' ').join('');
	return me;
};

class Main extends React.Component {
	state = {
		data: null,
		filterdJobs: null,
		filterTags: [],
		imgSrc: {
			Photosnap,
			Manage,
			Account,
			MyHome,
			LoopStudios,
			FaceIt,
			Shortly,
			Insure,
			EyecamCo,
			TheAirFilterCompany,
		},
	};
	render() {
		return (
			<>
				<Header isVisible={false} />
				<section className="jobList">
					<JobCard
						imgSrc={this.state.imgSrc[removeWhitespace(rst)]}
					/>
					<JobCard
						imgSrc={this.state.imgSrc[removeWhitespace(ost)]}
					/>
				</section>
			</>
		);
	}
}

export default Main;
