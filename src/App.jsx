import './App.scss';
import NavBar from './components/NavBar';
import Hello from './components/Hello';
import About from './components/About';
import Projects from './components/Projects';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Hello />
			<About />
			<Projects />
		</div>
	);
}

export default App;
