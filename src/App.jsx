import './App.scss';
import NavBar from './components/NavBar';
import Hello from './components/Hello';
import About from './components/About';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Hello />
			<About />
			<Projects />
			<Stack />
			<Footer />
		</div>
	);
}

export default App;
