import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import styles from './App.module.css';

function App() {
	return (
		<div className={styles.App}>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
