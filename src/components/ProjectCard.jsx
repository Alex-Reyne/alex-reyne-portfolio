import './ProjectCard.scss';

export default function ProjectCard(props) {
	const { image, title, description, setDialogContent, setOpen } = props;

	const handleClickOpen = () => {
		setDialogContent({ title, image, description });
		setOpen(true);
	};

	return (
		<>
			<div onClick={handleClickOpen} className='project-card-container fade-in'>
				<img src={image} />
				<h1>{title}</h1>
			</div>
		</>
	);
}
