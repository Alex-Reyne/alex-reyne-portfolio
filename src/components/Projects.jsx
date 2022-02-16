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
  const highlighterBlack = 'Highlighter Black';
  const smartList = 'Smart List';

  const juniorDescription = `Junior is a full-stack web application that allows new developers to easily create a portfolio and apply for jobs or freelance work that are relevant to them. Junior also allows employers to post jobs and gig work for developers to pick up. Junior uses a REST api backend with Express.js, PostgresSQL, and Twilio. The frontend was built with React, React Router, SASS, and MaterialUI (MUI).`;
  const alexReyneDescription = `Alex Reyne is my personal portfolio site. Designed and built to be responsive using React, SASS and MUI. Though it is ready for the world, I'm always looking to improve and working on it bit by bit. It allows potential employers, recruiters, and freelance clients to get a quick overview of who I am and what I do.`;
  const highlighterBlackDescription = `Highlighter Black is a personal custom start/new-tab page built as a chrome extention. You can upload custom images/gifs to play in the image box and add or delete custom links in the main content container. It also features a Duck Duck Go search bar with a slim, unintrusive design. Highlighter Black uses React-Typescript for the frontend client-side rendering It also uses a Node with Express.js and Typescript for the backend and a PostgreSQL Database all deployed to Heroku.`;
  const smartListDescription = `Smart List is an app that auto sorts list items using api calls and a custom sorting algorithm. Built with Express.js, SASS, jQuery, EJS, Ajax Google Books API, IMDB API, and Yelp API.`;

  const alexReyneLive = 'https://alexreyne.me';
  const highlighterBlackLive = 'https://highlighter-black.vercel.app/';
  const juniorLive = 'https://junior-client.herokuapp.com/dev/9';

  const highlighterBlackGithub = 'https://github.com/Alex-Reyne/highlighter-black';
  const smartListGithub = 'https://github.com/Alex-Reyne/smart-to-do-list';
  const alexReyneGithub = 'https://github.com/Alex-Reyne/alex-reyne-portfolio';
  const juniorGithub = 'https://github.com/Alex-Reyne/junior';

  const smartListImage =
    'https://raw.githubusercontent.com/Alex-Reyne/smart-to-do-list/master/public/images/smart-list-demo-video.gif';
  const highlighterBlackVideo =
    'https://user-images.githubusercontent.com/85032662/154366490-53c32ccd-0eb6-47e6-a03a-63c28a6c978c.mp4';
  const alexReyneImage = '../images/alex-reyne-portfolio.gif';
  const juniorImage = '../images/junior-recording.gif';

  return (
    <div id="projects" className="projects-container fade-in">
      <h1>Recent Projects</h1>
      <section className="projects">
        <div id="top-projects">
          <div>
            <ProjectCard
              video={highlighterBlackVideo}
              title={highlighterBlack}
              description={highlighterBlackDescription}
              github={highlighterBlackGithub}
              live={highlighterBlackLive}
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
        <div id="bottom-projects">
          <ProjectCard
            image={juniorImage}
            title={junior}
            description={juniorDescription}
            github={juniorGithub}
            live={juniorLive}
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
      <ProjectDialog dialogContent={dialogContent} open={open} setOpen={setOpen} />
    </div>
  );
}
