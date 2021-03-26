import React from 'react';
import './timeline.css';
import {
	VerticalTimeline,
	VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as WorkIcon } from './img/work.svg';
import { ReactComponent as SchoolIcon } from './img/school.svg';

const timeline = () => {
	let workIconStyles = { background: '#06d6a0' };
	let schoolIconStyles = { background: '#f9c74f' };

	let timelineElements = [
		{
			id: 1,
			title: 'Computing Degree',
			location: 'Southampton Solent University',
			description: 'BACHELOR OF SCIENCE with FIRST CLASS HONOURS (74.76%)',
			buttonText: 'View projects',
			date: 'September 2014 - May 2018',
			icon: 'school'
		},
		{
			id: 2,
			title: 'Travelling',
			location: 'Australia and South East Asia',
			description:
				'One year working holiday visa backpacking round Australia, spent my time in Melbourne, East Coast & worked on a Farm in the Outback. Also, 2 months exploring Thailand',
			date: 'July 2018 - September 2019',
			icon: 'work'
		},
		{
			id: 3,
			title: 'Revisited University Projects',
			location: 'Islington, London',
			description:
				'Resited my University projects to reignite my web development skills.',
			date: 'October 2019 - November 2019',
			icon: 'school'
		},
		{
			id: 4,
			title: 'Bartender',
			location: 'City of London',
			description: 'Worked at various events and bars around London.',
			date: 'November 2019 - Dec 2019',
			icon: 'work'
		},
		{
			id: 5,
			title: 'General Assembly',
			location: 'Witechapel, London',
			description:
				'Attended various talks and meetups to gain inside knowledge about the industry and connect with other developers.',
			date: 'January 2020',
			icon: 'work'
		},
		{
			id: 6,
			title: 'Studied new technologies',
			location: 'Islington, London',
			description:
				'Advised to start studying new programming languages and frameworks: MongoDb, node.js, & OAuth.',
			date: 'January 2020 - March 2020',
			icon: 'work'
		},
		{
			id: 7,
			title: 'THE PANDEMIC',
			location: 'Planet Earth',
			description: 'The whole world come to a stand still.',
			date: 'March 2020',
			icon: 'work'
		},
		{
			id: 8,
			title: 'Painting & decorating',
			location: 'London',
			description: 'Fell back on my trade qualification.',
			date: 'June 2020 - August 2020',
			icon: 'work'
		},
		{
			id: 9,
			title: 'Studied react.js',
			location: 'Islington, London',
			description: 'Studied React on platforms such as Udemy and YouTube.',
			date: 'August 2020 - September 2020',
			icon: 'work'
		},
		{
			id: 10,
			title: 'Studied Advanced JavaScript',
			location: 'Islington, London',
			description:
				'Furthered my knowledge on JavaScript on Udemy and YouTube, as I was aware its a fundamental language to be proficient at.',
			date: 'September 2020 - November 2020',
			icon: 'work'
		},
		{
			id: 11,
			title: 'Painting & decorating',
			location: 'London',
			description: 'Resumed this work as a means to earn money.',
			date: 'January 2021',
			icon: 'work'
		},
		{
			id: 12,
			title: 'Evening studying react.js',
			location: 'Islington, London',
			description:
				'After work I would use my evenings and weekends to study further into the React framework. ',
			date: 'December 2021 - now',
			icon: 'work'
		}
	];

	return (
		<div id='timeline' className='Timeline'>
			<h1 className='timelineTitle'>Timeline</h1>
			<VerticalTimeline>
				{timelineElements.map(el => {
					return (
						<VerticalTimelineElement
							key={el.id}
							date={el.date}
							dateClassName='date'
							iconStyle={el.icon === 'work' ? workIconStyles : schoolIconStyles}
							icon={el.icon === 'work' ? <WorkIcon /> : <SchoolIcon />}
						>
							<h3 className='vertical-timeline-element-title'>{el.title}</h3>
							<h5 className='vertical-timeline-element-subtitle'>
								{el.location}
							</h5>
							<p id='description'>{el.description}</p>
							{el.buttonText && (
								<a
									className={`button ${
										el.icon === 'work' ? 'workButton' : 'schoolButton'
									}`}
									href='/'
								>
									{el.buttonText}
								</a>
							)}
						</VerticalTimelineElement>
					);
				})}
			</VerticalTimeline>
		</div>
	);
};

export default timeline;
