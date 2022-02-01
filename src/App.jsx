import './App.scss';
import NavBar from './components/NavBar';
import Hello from './components/Hello';
import About from './components/About';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Hello />
			<About />
		</div>
	);
}

export default App;
