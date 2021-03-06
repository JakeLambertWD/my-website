import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Cards from '../components/Cards/Cards';
import About from '../components/About/About';
import Formik from '../components/Formik/Formik';
import Timeline from '../components/Timeline/timeline';

const Home = () => {
	// toggle the sidebar
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<HeroSection />
			<Cards />
			<About />
			<Timeline />
			<Formik />
		</>
	);
};

export default Home;
