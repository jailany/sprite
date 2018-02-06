import React, {Component} from 'react';
import Header from '../common/Header';
import HeroText from './HeroText.js';
import '../Common/bootstrap.css';
import '../Common/header.scss';
import './home.scss';
import DropzoneContainer from './DropzoneContainer';

class Home extends Component{

    constructor(){
        super();
        this.state = {
            hasDroppedIcons : false
        }
    }

    updateDropStatus(files){
        if(files.length > 0){
            this.setState({
                hasDroppedIcons : true
            })
        }else{
            this.setState({
                hasDroppedIcons : false
            })
        }
    }

  render(){
      const transition = {
          transition : 'width 0.3s ease-in-out'
      }
      return (
          <div>
            <div className="row fullHeight">
                <div style={transition} className={"halfColumn leftContainer" + " " + (this.state.hasDroppedIcons ? "shrinkWidth " : "")}>
                    <HeroText/>
                </div>
                <div style={transition} className={"halfColumn rightContainer" + " " + (this.state.hasDroppedIcons ? "growWidth " : "")}>
                    <div className="dropzoneComponent">
                        <DropzoneContainer update={this.updateDropStatus.bind(this)}/>
                    </div>
                </div>
            </div>
          </div>
      );
  }
}


export default Home;
