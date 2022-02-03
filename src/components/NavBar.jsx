import '../styles/NavBar.scss';
import useSound from 'use-sound';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function NavBar() {
	const [play] = useSound('../images/click.mp3');

	return (
		<nav id='nav-bar'>
			<section className='nav-links'>
				<Link>
					<sup>01</sup>
					<p
						className='.btn-flip'
						class='btn-flip'
						data-back='Hello'
						data-front='Hello'
						onClick={scroll.scrollToTop}
						onMouseEnter={play}
					></p>
				</Link>

				<Link to='about' spy={true} smooth={true}>
					<sup>02</sup>
					<p
						className='.btn-flip'
						class='btn-flip'
						data-back='About'
						data-front='About'
						onMouseEnter={play}
					></p>
				</Link>
				<Link to='projects' spy={true} smooth={true}>
					<sup>03</sup>
					<p
						className='.btn-flip'
						class='btn-flip'
						data-back='Projects'
						data-front='Projects'
						onMouseEnter={play}
					></p>
				</Link>
				<Link to='stack' spy={true} smooth={true}>
					<sup>04</sup>
					<p
						className='.btn-flip'
						class='btn-flip'
						data-back='Stack'
						data-front='Stack'
						onMouseEnter={play}
					></p>
				</Link>
			</section>
		</nav>
	);
}
