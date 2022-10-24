import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Pages/Home';

function App() {
  return (
    <div >
     <Routes>
        <Route path="/" element={<Home />} exact/>
      </Routes>
    </div>
  );
}

export default App;
