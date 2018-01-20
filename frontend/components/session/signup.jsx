import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '',password:''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/recipes');
    }
  }


  renderErrors(){
    const errors = this.props.errors ? (
      <ul>{
          this.props.errors.map((error,i) => (<li key={i}>{error}</li>))
          }
      </ul>
    ) : null;
    return (
      <div>
        {errors}
      </div>

    );
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.signup(this.state);
  }

  update(field){
    return(e) => {
      this.setState({[field]:e.target.value});
    };
  }
  render(){
    return(
      <div>
        <form className="signup-form">
          <h3>Sign up for a fan account</h3>
          <label htmlFor="username">Username
            <input type="text" value={this.state.username} onChange={this.update("username")}/>
          </label>

          <br/>
          <label htmlFor="password">Password
            <input type="password" value={this.state.password} onChange={this.update("password")}/>
          </label>

          <br/>
          <button className="signup-button" onClick={this.handleSubmit}>Sign up</button>
          <Link to='/login' className='alt-login'>Or log in!</Link>
          <div className="session-errors">  {this.renderErrors()}</div>

        </form>
      </div>
    );

  }


}

export default Signup;
