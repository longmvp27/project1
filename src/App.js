import './App.css';
import MainGUI from './Components/MainGUI/MainGUI';
import Login from './Components/LoginSignup/Login';
import Signup from './Components/LoginSignup/Signup';
import Books from './Components/Books/Books';
import Shipping from './Shipping/Shipping';
import SpecificBookPage from './Components/Books/SpecificBookPage';
import Account from './Components/Account/Account';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainGUI />} />
        <Route exact path="/books" element={<Books/>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/shipping" element={<Shipping />} />
        <Route path='/SpecificBookPage/:id' element={<SpecificBookPage />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;
