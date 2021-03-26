import React from 'react';
import profile from './images/Profile.jpeg';
import './About.css';

const About = () => {
	return (
		<>
			<div className='main__container' id='about'>
				<h1>ABOUT ME</h1>
				<div className='main__content'>
					<div className='main__text'>
						<h2>Find out all about me.</h2>
						<p>A Web Developer by trade, keyboard wizard by discipline. Based in Islington, London.</p>
						<p>
							Most of my time is speant building projects, many hours trying to perfect my work and while this is impossible, I do my best to come
							close. With the ever evolving nature of the industry, there's an array of technologies to specialise in, at the moment I'm focusing my
							attention to JavaScript and React.js.
						</p>
						<p>
							I Graduated Southampton Solent University with a First-class Bachelors Honours in Computing. Since University, my passion has grown
							exponentially for web development, always diving deeper into coding frameworks and languages.
						</p>
					</div>
					<div className='main__image'>
						<img src={profile} alt='Me' class='main__img' />
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
