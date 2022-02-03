import '../styles/NavBar.scss';
import useSound from 'use-sound';
import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import ContactDialog from './ContactDialog';

export default function NavBar() {
	// const [open, setOpen] = useState(false);
	const [volume, setVolume] = useState(0.02);
	const [play] = useSound('../images/click.mp3', { volume });

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
				{/* <Link to={null} spy={true} smooth={true}>
					<sup>05</sup>
					<p
						className='.btn-flip'
						class='btn-flip'
						data-back='Contact'
						data-front='Contact'
						onMouseEnter={play}
						onClick={e => setOpen(true)}
					></p>
				</Link> */}
			</section>
			{/* <ContactDialog open={open} setOpen={setOpen} /> */}
		</nav>
	);
}
