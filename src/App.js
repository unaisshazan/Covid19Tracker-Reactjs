import React,{useState} from 'react';
import './App.css';
import NavBar from './components/NavBar'
import InfoPanel from './components/InfoPanel';
import FootNav from './components/FootNav'


function App() {
  const screenConfig = useState(0); //screenconfig use to receive and send data to parent from child or etc
  return (
    <div>
		<NavBar />
		<InfoPanel currentScreen={screenConfig[0]}/>
		<FootNav screenConfig={screenConfig}/> 
	</div>
  );
}

export default App;
