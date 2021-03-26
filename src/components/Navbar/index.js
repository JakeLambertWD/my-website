import React, { useState, useEffect } from 'react';
// access to a variety of react-icons
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import Logo from '../../images/logojl.png';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn
} from './NavbarElements';

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);
	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	return (
		<>
			<Nav scrollNav={scrollNav}>
				<NavbarContainer>
					<NavLogo to='/' onClick={scrollToTop}>
						JL
					</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks
								to='cards'
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset={-80}
							>
								PROJECTS
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to='about'
								smooth={true}
								duration={500}
								spy={true}
								exact={true}
								offset={-80}
							>
								ABOUT
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to='timeline'
								smooth={true}
								duration={500}
								spy={true}
								exact={true}
								offset={-80}
							>
								TIMELINE
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to='contact'
								smooth={true}
								duration={500}
								spy={true}
								exact={true}
								offset={-80}
							>
								CONTACT
							</NavLinks>
						</NavItem>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
