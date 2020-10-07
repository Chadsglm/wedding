import React from 'react';
import './assets/css/main.css';
import Header from './components/header';
import Banner from './components/banner';
import One from './pages/one';
import TwOne from './pages/twOne';
import Two from './pages/two';
import Three from './pages/three';
import Five from './pages/five';
import Form from './pages/form';



function App(props) {
  return (
    <div className="landing is-preload">
      <div id="page-wrapper">
        <Header />
        <Banner />
        <One />
        <TwOne />
        <Two />
        <Three />
        <Five />
        <Form />
      </div>
    </div>
  );
}

export default App;
