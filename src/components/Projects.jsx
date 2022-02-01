import ProjectCard from './ProjectCard';

export default function Projects() {
	const junior = 'Junior';
	const alexReyne = 'Alex Reyne';
	const scheduler = 'Scheduler';
	const tweeter = 'Tweeter';

	const juniorImage =
		'https://github.com/Alex-Reyne/junior/blob/main/frontend/public/videos/junior-dev-page.gif?raw=true';

	return (
		<div id='projects' className='projects-container fade-in'>
			<h1>Recent Projects</h1>
			<section className='projects'>
				<div>
					<ProjectCard image={juniorImage} title={junior} />
					<ProjectCard image={juniorImage} title={junior} />
				</div>
				<div id='bottom-projects'>
					<ProjectCard image={juniorImage} title={junior} />
					<ProjectCard image={juniorImage} title={junior} />
				</div>
			</section>
		</div>
	);
}
