import React, { Component } from 'react';
import Employeestile from './employeestile';



export default class employeesdata extends Component{

  render() {
    console.log(this.props.data)
    return(
    <>
    <Employeestile data={this.props.data} age={this.props.age}/>

    </>)
  }
}

