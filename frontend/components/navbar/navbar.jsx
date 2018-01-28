import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps) {
  if (this.props.location.pathname !== nextProps.location.pathname) {
    this.props.clearErrors();
  }
}

  // render(){
  //   const rightNav = (
  //     <div>
  //       <div>Welcome User</div>
  //       <div>My Recipes</div>
  //       <div>Logout</div>
  //     </div>
  //   );
  //
  //   const leftNav = (
  //     <div>
  //       <Link to= '/'><img className="logo" src="https://s3.us-east-2.amazonaws.com/greenapron/Logo2.png"/></Link>
  //       <Link to='/recipes'>Menu</Link>
  //     </div>
  //   );
  //   return(
  //     <header className="nav-bar">
  //       <div className = "left-nav">
  //         {leftNav}
  //       </div>
  //       <div className = "right-nav">
  //         {rightNav}
  //       </div>
  //     </header>
  //   );
  // }


  render(){
  const navContent = this.props.currentUser ? (
    <div>
      <div>Hi {this.props.currentUser.username}</div>
      <NavLink to='/myRecipes' exact={true} activeStyle={{ textDecoration: 'underline'}}>Favorites</NavLink>
      <NavLink to='/customRecipes' exact={true} activeStyle={{ textDecoration: 'underline'}}>Custom Recipes</NavLink>

      <div><a href="#" onClick={this.props.logout}>Log Out</a></div>
    </div>
  ) : (
    <div>
      <Link to='/login'>Log In</Link>
      <Link to='/signup'>Sign Up</Link>

        <Link to='/guest'>Demo Login</Link>
    </div>
  );
  return (
    <header className="nav-bar">
      <div className="left-nav">
        <Link to='/'><img className='logo' src="https://s3.us-east-2.amazonaws.com/greenapron/Logo2.png"/></Link>
          <NavLink to='/recipes' exact={true} activeStyle={{ textDecoration: 'underline' }}>Menu</NavLink>

      </div>
      <div className="right-nav">  {navContent}</div>
    </header>
  );
}


}

export default NavBar;
