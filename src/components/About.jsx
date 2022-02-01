import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';

export default function About() {
	return (
		<div className='about-container fade-in'>
			<section className='about-me'>
				<Link to='about' spy={true} smooth={true}>
					<FontAwesomeIcon id='about' icon={faAngleDoubleDown} />
				</Link>
				<h1>About Me</h1>
				<p>
					I’m a Full-Stack Web Developer and self taught Graphic Designer. I’ve
					always had a passion for creating art and tinkering with things.
				</p>
				<p>
					I can work independently but I also enjoy collaborating as part of a
					team. I love to solve problems and have a high attention to detail.
				</p>
				<p>
					After 10 years as a designer I realized that my passion for creative
					works had a hole in it. With a burning desire to implement my designs
					as functional works, I decided to dive into web development.
				</p>
				<p>
					I am now ready and eager to work in and collaborate with a team of
					likeminded developers and designers
				</p>
			</section>
		</div>
	);
}
