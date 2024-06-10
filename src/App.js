import logo from './logo.svg';
import './App.css';
import AddFriend from './components/AddFriend';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewall from './components/Viewall';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddFriend/>}/>
        <Route path='/viewall' element={<Viewall/>}/>
         
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
