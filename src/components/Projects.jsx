import '../styles/Projects.scss';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDialog from './ProjectDialog';

export default function Projects() {
	const [open, setOpen] = useState(false);
	const [dialogContent, setDialogContent] = useState({
		title: '',
		image: '',
		description: '',
		github: '',
		live: '',
	});

	const juniorGithub = 'https://github.com/Alex-Reyne/junior';
	const junior = 'Junior';
	const juniorDescription = `Junior is a full-stack web application that allows new developers to easily create a portfolio and apply for jobs or freelance work that are relevant to them. Junior also allows employers to post jobs and gig work for developers to pick up. Junior uses a REST api backend with Express.js, PostgresSQL, and Twilio. The frontend was built with React, React Router, SASS, and MaterialUI (MUI).`;

	const alexReyneLive = 'https://alexreyne.me';
	const alexReyneGithub = 'https://github.com/Alex-Reyne/alex-reyne-portfolio';
	const alexReyne = 'Alex Reyne';
	const alexReyneDescription = `Alex Reyne is my person portfolio site. Designed and built in under 8 hours using React, and SASS and MUI for the modal you're looking at right now. It allows potential employers, recruiters, and freelance clients to get a quick overview of who I am and what I do.`;
	// const scheduler = 'Scheduler';
	// const tweeter = 'Tweeter';

	// const schedulerImage =
	// 	'https://github.com/Alex-Reyne/scheduler/blob/master/public/alex-reyne-scheduler.png?raw=true';
	const alexReyneImage = '../images/alex-reyne-portfolio.gif';
	const juniorImage = '../images/junior-recording.gif';

	return (
		<div id='projects' className='projects-container fade-in'>
			<h1>Recent Projects</h1>
			<section className='projects'>
				<div id='top-projects'>
					<div>
						<ProjectCard
							image={juniorImage}
							title={junior}
							description={juniorDescription}
							github={juniorGithub}
							open={open}
							setOpen={setOpen}
							setDialogContent={setDialogContent}
						/>
					</div>
					<div>
						<ProjectCard
							image={alexReyneImage}
							title={alexReyne}
							description={alexReyneDescription}
							github={alexReyneGithub}
							live={alexReyneLive}
							open={open}
							setOpen={setOpen}
							setDialogContent={setDialogContent}
						/>
					</div>
				</div>
				{/* <div id='bottom-projects'>
					<ProjectCard image={schedulerImage} title={scheduler} />
					<ProjectCard image={tweeterImage} title={tweeter} />
				</div> */}
			</section>
			<ProjectDialog
				dialogContent={dialogContent}
				open={open}
				setOpen={setOpen}
			/>
		</div>
	);
}
