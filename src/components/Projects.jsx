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

	const junior = 'Junior';
	const alexReyne = 'Portfolio';
	const scheduler = 'Scheduler';
	const smartList = 'Smart List';

	const juniorDescription = `Junior is a full-stack web application that allows new developers to easily create a portfolio and apply for jobs or freelance work that are relevant to them. Junior also allows employers to post jobs and gig work for developers to pick up. Junior uses a REST api backend with Express.js, PostgresSQL, and Twilio. The frontend was built with React, React Router, SASS, and MaterialUI (MUI).`;
	const alexReyneDescription = `Alex Reyne is my person portfolio site. Designed and built in under 8 hours using React, and SASS and MUI for the modal you're looking at right now. It allows potential employers, recruiters, and freelance clients to get a quick overview of who I am and what I do.`;
	const schedulerDescription = `Interview Scheduler is a React app that uses custom hooks and selector functions to allow users to create, edit, and cancel interviews. Development focused on a single page application (SPA) called Interview Scheduler, built using React. Data is persisted by the API server using a PostgreSQL database. The client application communicates with an API server over HTTP, using the JSON format. Jest, Storybook, and Cypress tests are used through the development of the project.`;
	const smartListDescription = `Smart List is an app that auto sorts list items using api calls and a custom sorting algorithm. Built with Express.js, SASS, jQuery, EJS, Ajax Google Books API, IMDB API, and Yelp API.`;

	const alexReyneLive = 'https://alexreyne.me';
	const schedulerLive = 'https://scheduler-project-lhl.netlify.app/';

	const schedulerGithub = 'https://github.com/Alex-Reyne/scheduler';
	const smartListGithub = 'https://github.com/Alex-Reyne/smart-to-do-list';
	const alexReyneGithub = 'https://github.com/Alex-Reyne/alex-reyne-portfolio';
	const juniorGithub = 'https://github.com/Alex-Reyne/junior';

	const smartListImage =
		'https://raw.githubusercontent.com/Alex-Reyne/smart-to-do-list/master/public/images/smart-list-demo-video.gif';
	const schedulerImage = '../images/scheduler-demo-video.gif';
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
				<div id='bottom-projects'>
					<ProjectCard
						image={schedulerImage}
						title={scheduler}
						description={schedulerDescription}
						github={schedulerGithub}
						live={schedulerLive}
						open={open}
						setOpen={setOpen}
						setDialogContent={setDialogContent}
					/>
					<ProjectCard
						image={smartListImage}
						title={smartList}
						description={smartListDescription}
						github={smartListGithub}
						open={open}
						setOpen={setOpen}
						setDialogContent={setDialogContent}
					/>
				</div>
			</section>
			<ProjectDialog
				dialogContent={dialogContent}
				open={open}
				setOpen={setOpen}
			/>
		</div>
	);
}
