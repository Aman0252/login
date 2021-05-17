import React, { Component } from 'react';
import design from './login.module.css';
import button from 'react-bootstrap/Button';
class Login extends Component {
  constructor (){
    super()
    this.state={
      email:null,
      password:null,
    }
  }
  submit(){
    console.log(this.state)
  }
  render() {
    return (
      <div className="card" style={{marginTop:"50px", width:"80%", marginLeft:"70px" , }} >
  <div className="card-body" style={{}}>
  <div className={design.login}>
        <h1>Login page</h1>
        Email:
        <input type='text' name='email' onChange={(f)=>{this.setState({email:f.target.value})}}/>
        <br></br>
        <br></br>
        password:
        <input type='password' name='password' onChange={(f)=>{this.setState({password:f.target.value})}}/>
        <br></br>
        <br></br>
      <button type='submit' class="btn btn-primary" style={{fontSize:'20px'}} onClick={()=>this.submit() }>login</button>
    </div>

  </div>
</div>













     );
  }
}

export default Login;
