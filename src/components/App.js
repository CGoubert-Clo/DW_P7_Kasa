import Router from './Router';
import '../styles/App.css';
import Logements from "../data/logements.json"


import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Router logements={Logements} />
      <Footer />
    </div>
  );
}

export default App;

