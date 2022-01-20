import { Routes, Route } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import styles from './App.module.css';

function App() {

  const { user, authIsReady } = useAuthContext(); 

	return (
		<div className={styles.App}>
     {authIsReady && ( 
       <>
      <Navbar />
			<Routes>
				<Route path='/' element={user ? <Home /> : <Login/> } />
				<Route path='/signup' element={!user ? <Signup /> : <Home />} />
				<Route path='/login' element={!user ? <Login /> : <Home />} />
			</Routes>
      </>
      )}
			
		</div>
	);
}

export default App;
