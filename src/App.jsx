
import './App.css'
import { useState, useEffect } from 'react';
import Home from './Pages/Home'
import MarketPlace from './Pages/marketPlace'
import LoginPage from './Pages/Login';
import SignUpPage from './Pages/SignUp';
import Loader from './Components/Loader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    
      <Router>
        {loading ? (
          <Loader />
         ) : (
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/marketplace' exact element={<MarketPlace />} />
            <Route path='/login' exact element={<LoginPage />} />
            <Route path='/signup' exact element={<SignUpPage />} />
          </Routes>
        )}
      </Router>
  );
}

export default App;
