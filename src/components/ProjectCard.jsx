import '../styles/ProjectCard.scss';

export default function ProjectCard(props) {
  const { image, title, description, github, live, setDialogContent, setOpen, video } = props;

  const handleClickOpen = () => {
    setDialogContent({ title, image, description, github, live, video });
    setOpen(true);
  };

  return (
    <>
      <div onClick={handleClickOpen} className="project-card-container fade-in">
        {image && <img src={image} />}
        {video && (
          <>
            <video loop>
              <source src={video} type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </>
        )}
        <h1>{title}</h1>
      </div>
    </>
  );
}
