import React, {useEffect} from 'react';
import { useAuth } from '../Hooks/AuthHook';

// import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import AdminDasboard from './AdminDashboard';
import Login from './Login';
import Registration from './Registration';
import '../App.css';

function Home() {
    const { data, home } = useAuth();
    
    useEffect(()=>{
        home()
    },[])
   
  return (
    <>
        {/* public
        {JSON.stringify(data)} */}
      {/* <Router>
        <div className="App">
            <ul className="navbar">
            <li>
                <Link to="/"></Link>
            </li>
            <li>
                <Link to="/registration">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/AdminDasboard">AdminDasboard</Link>
            </li>
            </ul>
        <Routes>
                <Route exact path='/'  > Home</Route>
                <Route exact path='/registration' element={< Registration/>}></Route>
                <Route exact path='/login' element={< Login/>}></Route>
                <Route exact path='/AdminDasboard' element={< AdminDasboard/>}></Route>
        </Routes>
        </div>
      </Router> */}

      public page
    </>
  )
}

export default Home
