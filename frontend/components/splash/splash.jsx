import React from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Splash extends React.Component {
  constructor(props){
    super(props);
  }



  render(){


    return(
      <div>
          <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={4000} transitionEnter={false} transitionLeave={false}>
              <h2>{'Welcome to Green Apron'}</h2>
          </ReactCSSTransitionGroup>
          <img className='splash-image' src="https://s3.us-east-2.amazonaws.com/greenapron/splash_image.png"/>
      </div>
    );

  }

}

export default Splash;
