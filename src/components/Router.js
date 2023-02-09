/*Logique de routage de l'application*/


import { Routes, Route } from 'react-router-dom';

import Home from './Home/Home';

import About from './About/About';

import NotFound from './NotFound/NotFound';

import Logements from './Logements/Logements';


function Router(props) {

    return (
        <Routes>
            <Route exact path="/" element={<Home logements={props.logements} />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/logement/:id" element={<Logements logements={props.logements} />} />
        </Routes>
    )
}

export default Router;