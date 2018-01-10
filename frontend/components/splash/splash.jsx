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
      <div className="splash-container">

          <div className="splash-barrier">Cook away.  Your recipes are safe with us.</div>
          <img className='splash-image' src="https://s3.us-east-2.amazonaws.com/greenapron/splash_image3.png"/>
          <div className="splash-text">Food is better when it starts from scratch.</div>
      </div>
      <div className="transition">
        <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={4000} transitionEnter={false} transitionLeave={false}>
            <h2 className="green-apron">{'Green Apron'}</h2>
        </ReactCSSTransitionGroup>
      </div>
      </div>
    );

  }

}

export default Splash;
