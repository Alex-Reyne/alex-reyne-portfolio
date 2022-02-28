import '../styles/Stack.scss';
import express from '../images/express-js-javascript.svg';
import react from '../images/react.svg';
import node from '../images/node-nodejs.svg';
import html from '../images/html-html5.svg';
import css from '../images/CSS-CSS3.svg';
import mui from '../images/material-ui-mui.svg';
import sass from '../images/SASS.svg';
import ruby from '../images/ruby-lang-rails.svg';
import postgres from '../images/postgresql-psql.svg';
import illustrator from '../images/adobe-illustrator.svg';
import photoshop from '../images/adobe-photoshop.svg';
import afterEffects from '../images/adobe-after-effects.svg';
import indesign from '../images/adobe-indesign.svg';
import figma from '../images/figma.svg';

export default function Stack() {
  return (
    <div id="stack" className="stack-container fade-in">
      <section>
        {/* <h1>My Stack</h1> */}
        <div className="stack-alex fade-in">
          <div className="dev-stack">
            {/* <img
							src='../images/dev-stack.svg'
							alt='dev-stack'
							id='dev-stack'
						></img> */}
            <img
              src={express || '../images/express-js-javascript.svg'}
              alt="express-js-javascript"
              id="express-js-javascript"
            ></img>
            <img src={react || '../images/react.svg'} alt="react" id="react"></img>
            <img src={node || '../images/node-nodejs.svg'} alt="node-nodejs" id="node-nodejs"></img>
            <img src={html || '../images/html-html5.svg'} alt="html-html5" id="html-html5"></img>
            <img src={css || '../images/CSS-CSS3.svg'} alt="css-css3" id="css-css3"></img>
            <img
              src={mui || '../images/material-ui-mui.svg'}
              alt="material-ui-mui"
              id="material-ui-mui"
            ></img>
            <img src={sass || '../images/SASS.svg'} alt="SASS" id="SASS"></img>
            <img
              src={ruby || '../images/ruby-lang-rails.svg'}
              alt="ruby-lang-rails"
              id="ruby-lang-rails"
            ></img>
            <img
              src={postgres || '../images/postgresql-psql.svg'}
              alt="postgresql-psql"
              id="postgresql-psql"
            ></img>
          </div>
          <div className="design-stack">
            {/* <img
							src='../images/design-stack.svg'
							alt='design-stack'
							id='design-stack'
						></img> */}
            <div className="design-icons">
              <img
                src={illustrator || '../images/adobe-illustrator.svg'}
                alt="adobe-illustrator"
                id="adobe-illustrator"
              ></img>
              <img
                src={photoshop || '../images/adobe-photoshop.svg'}
                alt="adobe-photoshop"
                id="adobe-photoshop"
              ></img>
              <img
                src={afterEffects || '../images/adobe-after-effects.svg'}
                alt="adobe-after-effects"
                id="adobe-after-effects"
              ></img>
              <img
                src={indesign || '../images/adobe-indesign.svg'}
                alt="adobe-indesign"
                id="adobe-indesign"
              ></img>
              <img src={figma || '../images/figma.svg'} alt="figma" id="figma"></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
