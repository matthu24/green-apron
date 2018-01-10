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
        <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
            <h2 className="green-apron">{'Green Apron'}</h2>
        </ReactCSSTransitionGroup>
      </div>
      <div className="testimonials">
        <div className = "testimony1">
          Hands down, these recipes are the best.  Dinner would simply not be the same without Green Apron.
        </div>
        <div className="testimony2">
          Green Apron is my secret weapon in the kitchen.  Having all my recipes in one place is crucial!
        </div>
      </div>
      <div className = "second-splash-container">
        <img className='second-splash' src="https://s3.us-east-2.amazonaws.com/greenapron/second_splash.png"/>

      </div>

      </div>
    );

  }

}

//

export default Splash;
