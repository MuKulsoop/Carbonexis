
import './App.css'
import { useState, useEffect } from 'react';
import Home from './Pages/Home'
import MarketPlace from './Pages/marketPlace'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    
      <Router>
        {/* {loading ? (
          {/* <Loader /> */}
        {/* ) : ( */}
          <Routes>
            <Route path='/' exact element={<Home />} />
            {/* <Route path='/login' exact element={<Login />} /> */}
            {/* <Route path='/signup' exact element={<SignUp />} /> */}
            <Route path='/marketplace' exact element={<MarketPlace />} />
          </Routes>
        {/* )} */}
      </Router>
  );
}

export default App;
