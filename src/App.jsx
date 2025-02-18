
import './App.css'
import { useState, useEffect } from 'react';
import Home from './Pages/Home'
import MarketPlace from './Pages/marketPlace'
import LoginPage from './Pages/Login';
import SignUpPage from './Pages/SignUp';
import Loader from './Components/Loader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './Pages/Projects';
import ProjectCreatePage from './Pages/CreateProject';
import NFTInsta from './Pages/NFTIntsa';



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch('./projects.json')
    // .finally(() => setLoading(false));
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Duration of the loader animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className='Main'>
      <Router>
        {loading ? (
          <Loader />
         ) : (
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/marketplace' exact element={<MarketPlace />} />
            <Route path='/login' exact element={<LoginPage />} />
            <Route path='/signup' exact element={<SignUpPage />} />
            <Route path='/Projects' exact element={<Projects />} />
            <Route path='/Projects/create' exact element={<ProjectCreatePage />} />
            <Route path='/instaNFT' exact element={<NFTInsta />} />
          </Routes>
        )}
      </Router>
      </div>
    </>
      
  );
}

export default App;
