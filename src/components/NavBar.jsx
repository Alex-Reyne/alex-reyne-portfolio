import '../styles/NavBar.scss';

import { Link, animateScroll as scroll } from 'react-scroll';

export default function NavBar() {
	return (
		<nav id='nav-bar'>
			<section className='nav-links'>
				<p onClick={scroll.scrollToTop}>
					<sup>01</sup>hello
				</p>
				<Link to='about' spy={true} smooth={true}>
					<p>
						<sup>02</sup>about
					</p>
				</Link>
				<Link to='projects' spy={true} smooth={true}>
					<p>
						<sup>03</sup>projects
					</p>
				</Link>
				<Link to='stack' spy={true} smooth={true}>
					<p>
						<sup>04</sup>stack
					</p>
				</Link>
			</section>
		</nav>
	);
}
