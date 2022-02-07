import './App.scss';
import NavBar from './components/NavBar';
import Hello from './components/Hello';
import About from './components/About';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Hello />
			<About />
			<Projects />
			{/* <Stack /> */}
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
