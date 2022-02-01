import './Stack.scss';
export default function Stack() {
	return (
		<div id='stack' className='stack-container fade-in'>
			<section>
				<h1>My Stack</h1>
				<div className='stack-alex fade-in'>
					<div className='dev-stack'>
						<img src='dev-stack.svg' alt='dev-stack' id='dev-stack'></img>
						<img
							src='express-js-javascript.svg'
							alt='express-js-javascript'
							id='express-js-javascript'
						></img>
						<img src='react.svg' alt='react' id='react'></img>
						<img src='node-nodejs.svg' alt='node-nodejs' id='node-nodejs'></img>
						<img src='html-html5.svg' alt='html-html5' id='html-html5'></img>
						<img src='css-css3.svg' alt='css-css3' id='css-css3'></img>
						<img
							src='material-ui-mui.svg'
							alt='material-ui-mui'
							id='material-ui-mui'
						></img>
						<img src='SASS.svg' alt='SASS' id='SASS'></img>
						<img
							src='ruby-lang-rails.svg'
							alt='ruby-lang-rails'
							id='ruby-lang-rails'
						></img>
						<img
							src='postgresql-psql.svg'
							alt='postgresql-psql'
							id='postgresql-psql'
						></img>
					</div>
					<div className='design-stack'>
						<img
							src='design-stack.svg'
							alt='design-stack'
							id='design-stack'
						></img>
						<div className='design-icons'>
							<img
								src='adobe-illustrator.svg'
								alt='adobe-illustrator'
								id='adobe-illustrator'
							></img>
							<img
								src='adobe-photoshop.svg'
								alt='adobe-photoshop'
								id='adobe-photoshop'
							></img>
							<img
								src='adobe-after-effects.svg'
								alt='adobe-after-effects'
								id='adobe-after-effects'
							></img>
							<img
								src='adobe-indesign.svg'
								alt='adobe-indesign'
								id='adobe-indesign'
							></img>
							<img src='figma.svg' alt='figma' id='figma'></img>
						</div>
					</div>
				</div>
			</section>
			<footer>
				<p>© Alex Reyne 2022</p>
			</footer>
		</div>
	);
}
