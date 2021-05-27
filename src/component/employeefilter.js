import React, {useState} from 'react';
import Employee from './employee';

export default function Employeefilter(){
  const [age,setage] = useState('');
  const handlecallback = (event) =>{
    setage({age:event});
  }
  console.log(age);
  return(
    <div>
      <Employee value = {handlecallback}/>
    </div>
  )
}
