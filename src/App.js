import React,{useState} from 'react';
import './App.css';
import NavBar from './components/NavBar'
import InfoPanel from './components/InfoPanel';
import FootNav from './components/FootNav'


function App() {
  const [CurrentScreen, setScreen] = React.useState('recents');
  return (
    <div >
    <NavBar/>
    <InfoPanel/>
    <FootNav/>
    </div>
  );
}

export default App;
