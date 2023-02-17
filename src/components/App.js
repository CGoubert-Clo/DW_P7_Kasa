import Router from './Router';
import '../styles/App.css';


import Header from './Header/Header';
import Footer from './Footer/Footer';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [logements, setLogements] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  // const [errMsg, setErrMsg] = useState()

  useEffect(() => {
    fetch('/logements.json')
      .then(response => response.json())
      .then(data => {
        setIsLoading(false)
        setLogements(data)
      }
      )
      .catch(() => {
        setIsLoading(false)

      })
  }, [])



  // if (errMsg) return <div>{errMsg}</div>

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="App">
      <Header />
      <Router logements={logements} />
      <Footer />
    </div>
  );
}

export default App;

