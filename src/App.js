
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Loginpage from './pages/login/Loginpage';
import Registerpage from './pages/register/Registerpage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path = '/' element = {<Homepage/>} />
      <Route path = '/login' element = {<Loginpage/>} />
      <Route path = '/register' element = {<Registerpage/>} />
        {/* <Route path = '/register' element = {<h1>Register page</h1>} />
        <Route path = '/login' element = {<h1>Login page</h1>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
