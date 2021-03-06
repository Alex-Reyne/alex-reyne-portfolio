import '../styles/Contact.scss';

export default function Contact() {
	return (
		<section id='contact' className='contact-section'>
			<h1>Contact Me</h1>
			<div className='contact-links'>
				<a
					className='btn-flip'
					href='https://github.com/Alex-Reyne'
					target='_blank'
				>
					github
				</a>
				<a
					className='btn-flip'
					href='https://drive.google.com/file/d/1rvrY8h93EFONuJnC_6eURYJscZSnOp1V/view'
					target='_blank'
				>
					Resume
				</a>
				<a
					className='btn-flip'
					href='https://linkedin.com/in/alexanderreyne'
					target='_blank'
				>
					LinkedIn
				</a>
				<a
					className='btn-flip'
					href='https://linktr.ee/alexreyne'
					target='_blank'
				>
					Linktree
				</a>
			</div>
			<div className='contact-info'>
				<p>306.821.3553</p>
				<p>creativereyne@gmail.com</p>
			</div>
		</section>
	);
}
