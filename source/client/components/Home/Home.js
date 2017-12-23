import React from 'react';
import Header from '../common/Header';
import HeroText from './HeroText.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../common/header.scss';
import './home.scss';
import DropzoneContainer from './DropzoneContainer';


const Home = () => {
  return (
      <div>
        <Header/>
        <HeroText/>
        <DropzoneContainer/>
      </div>
  );
}


export default Home;
