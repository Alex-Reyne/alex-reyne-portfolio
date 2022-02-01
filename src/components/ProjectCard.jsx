import './ProjectCard.scss';

export default function ProjectCard(props) {
	const { image, title } = props;

	return (
		<div className='project-card-container fade-in'>
			<img src={image} />
			<h1>{title}</h1>
		</div>
	);
}
