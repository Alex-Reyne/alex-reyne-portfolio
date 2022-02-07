import '../styles/NavBar.scss';
import useSound from 'use-sound';
import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import ContactDialog from './ContactDialog';

export default function NavBar() {
	const [openNav, setOpenNav] = useState(false);
	const [volume, setVolume] = useState(0.05);
	const [play] = useSound('../images/click.mp3', { volume });

	const handleNav = () => {
		openNav ? setOpenNav(false) : setOpenNav(true);
	};

	return (
		<>
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
			<nav id='mobile-nav-bar'>
				<div className='hamburger-menu' onClick={handleNav}>
					<hr />
					<hr />
					<hr />
				</div>
			</nav>
			{openNav && (
				<>
					<section className='mobile-nav-links fade-in' onClick={handleNav}>
						<Link onClick={handleNav}>
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
						<Link to='about' spy={true} smooth={true} onClick={handleNav}>
							<sup>02</sup>
							<p
								className='.btn-flip'
								class='btn-flip'
								data-back='About'
								data-front='About'
								onMouseEnter={play}
							></p>
						</Link>
						<Link to='projects' spy={true} smooth={true} onClick={handleNav}>
							<sup>03</sup>
							<p
								className='.btn-flip'
								class='btn-flip'
								data-back='Projects'
								data-front='Projects'
								onMouseEnter={play}
							></p>
						</Link>
						<Link to='stack' spy={true} smooth={true} onClick={handleNav}>
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
				</>
			)}
		</>
	);
}
