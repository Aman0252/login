import React,{useState} from 'react';
import Employeeform from './employeeform';

export default function NewEmployee(props){
  const [data,setdata] =useState('');
  const handlecallback = (event) =>{
    setdata({data:event});
    props.value(data)
  }
  return(
    <div>
      <Employeeform details = {handlecallback}/>
    </div>
  )
}
