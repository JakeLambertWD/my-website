import React from 'react';
import CardItem from '../CardItem/CardItem';
import './Cards.css';
import forkify from '../../images/forkify.png';
import mapty from '../../images/mapty.png';
import bankist from '../../images/bankist.png';
import budgety from '../../images/budgety.png';
import jobsite from '../../images/jobsite.PNG';
import netflix from '../../images/netflix.png';
import burger from '../../images/burger.PNG';

function Cards() {
	return (
		<div className='cards' id='cards'>
			<h1>Latest Projects</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<CardItem
							src={netflix}
							path='https://netflix-clone-634c1.web.app/'
							label='React w/ Firebase Authentication and Stripe'
							title='Netflix clone'
							text='API call using TMBd for latest movies, user authentication combined with Redux. Stripe checkout/payment system connecting with Firestore database.'
							github='https://github.com/JakeLambertWD/precise-budget'
						/>
						<CardItem
							src={burger}
							path='https://design-my-burger.netlify.app/'
							label='React w/ Firebase and Axios'
							title='Design My Burger'
							text='Dynamic burger builder User Interface, which uses the Promise based HTTP client Axios to communicate to the backend database with request and response. We use Firebases Realtime Database to store data. Also the implentation of Spinners upon req/res.'
							github='https://github.com/JakeLambertWD/design-my-burger'
						/>
					</ul>
					<ul className='cards__items'>
						<CardItem
							src={jobsite}
							path='https://mockingbot.com/app/O7jBA064A01810AGDsvijetOb3idnqY#screen=sE820269F571490780939612'
							label='UX/UI Mockup Design'
							title='Steady Paycheck Agency'
							text='Minimal web developer job seekers app design for UCD. Design and implementation using UX assets such as: Storyboarding, Wireframes, Use Cases and Prototyping.'
						/>
						<CardItem
							src={mapty}
							path='https://mapty-fitness.netlify.app/'
							label='Advanced JavaScript w/ Geolocation'
							title='MAPTY'
							text='This app focuses on Geolocation to represent the users current location and allows them to add markers to the map with an attached dynamic popup. The logic is organised with the Object-Orientated Programming design. The data is held using a simple local storage.'
							github='https://github.com/JakeLambertWD/mapty'
						/>
						<CardItem
							src={forkify}
							path='https://forkify-jake.netlify.app/'
							label='Advanced JavaScript'
							title='FORKIFY'
							text='An app that takes advantage of the MVC design pattern to divide program logic into 3 interconnected elements. Promises to represent the completion (or failure) of asynchronous operations. API calls to retreive data, which gets manipulated and then displayed on the UI.'
							github='https://github.com/JakeLambertWD/forkify'
						/>
					</ul>
					<ul className='cards__items'>
						<CardItem
							src={budgety}
							path='https://precisebudget.netlify.app/'
							label='Advanced JavaScript'
							title='PRECISE BUDGET'
							text='The data is held within Functional Constructors and we apend functions through Functional Prototypes. This app is has complex logic and uses a vast array of JS methods.'
							github='https://github.com/JakeLambertWD/netflix-clone'
						/>
						<CardItem
							src={bankist}
							path='https://jakelambertwd.github.io/bankist-national/'
							label='Advanced JavaScript w/ Intersection Observer API'
							title='BANKIST NATIONAL'
							text='Focusing on design and animations. This app uses Smooth scrolling, the Navigation bar has a fade animation and is sticky. Each section has a reveal animation and the images are lazy loaded. Also a hard coded slider.'
							github='https://github.com/JakeLambertWD/bankist-national'
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
