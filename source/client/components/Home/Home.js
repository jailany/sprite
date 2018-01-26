import React from 'react';
import Header from '../common/Header';
import HeroText from './HeroText.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../common/header.scss';
import './home.scss';
import DropzoneContainer from './DropzoneContainer';


const Home = () => {

    constructor(){
        super();
        this.state = {
            hasDroppedIcons : false
        }
    }

    updateDropStatus(status){
        this.setState({
            hasDroppedIcons : status
        })
    }

  return (
      <div>
        <div className="row fullHeight">
            <div className={"halfColumn leftContainer"+(this.state.hasDroppedIcons) ? " shrinkWidth" : ""}>
                <HeroText/>
            </div>
            <div className="halfColumn rightContainer">
                <div className="dropzoneComponent">
                    <DropzoneContainer/>
                </div>
            </div>
        </div>
      </div>
  );
}


export default Home;
