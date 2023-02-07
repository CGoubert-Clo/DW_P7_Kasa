/*Logique de routage de l'application*/


import { Routes, Route } from 'react-router-dom';

import Home from './Home/Home';

import About from './About';

import NotFound from './NotFound';

import Logements from './Logements/Logements';


function Router(props) {

    return (
        <Routes>
            <Route path="/" element={<Home logements={props.logements} />} />
            <Route path="/about" element={<About />} />
            <Route path="/logement/:id" element={<Logements logements={props.logements} />} />            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Router;