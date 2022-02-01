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
				<p>
					<sup>03</sup>projects
				</p>
				<p>
					<sup>04</sup>stack
				</p>
			</section>
		</nav>
	);
}
