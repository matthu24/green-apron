import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const rightNav = (
      <div>
        <div>Welcome User</div>
        <div>My Recipes</div>
        <div>Logout</div>
      </div>
    );

    const leftNav = (
      <div>
        <div>Icon</div>
        <div>Menu</div>
      </div>
    );
    return(
      <header className="nav-bar">
        <div className = "left-nav">
          {leftNav}
        </div>
        <div className = "right-nav">
          {rightNav}
        </div>
      </header>
    );
  }

}

export default NavBar;
