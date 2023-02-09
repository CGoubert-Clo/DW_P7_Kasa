import Router from './Router';
import '../styles/App.css';


import Header from './Header/Header';
import Footer from './Footer/Footer';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [logements, setLogements] = useState([])

  useEffect(() => {
    fetch('./logements.json')
      .then(response => response.json())
      .then(data => {
        setLogements(data)
      }
      )
  }, [])


  return (
    <div className="App">
      <Header />
      <Router logements={logements} />
      <Footer />
    </div>
  );
}

export default App;

