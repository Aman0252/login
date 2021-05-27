import './App.css';
import React,{useState} from 'react';
// import Employeesdata from './component/employeesdata';
import Newemployee from './component/newemployee';
// import Employeeform from './component/employeeform';
import Employeefilter from './component/employeefilter';
//import Employee from './component/employee';

function App() {
  const [value,setvalue] =useState('');
  const handlecallback = (event) =>{
    setvalue({value:event});
    console.log(value);

  }

   /**  const employees= [
    {
      id: 'e1',
      name: 'Akhil',
      age: 20
    },
    {
      id: 'e2',
      name: 'Aman',
      age: 21
    },
{
      id: 'e3',
      name: 'Vikas',
      age: 22
    },
{
      id: 'e4',
      name: 'Harminder',
      age: 23
    },
{
      id: 'e5',
      name: 'Deeksha',
      age: 24
    },
{
      id: 'e6',
      name: 'Puneet',
      age: 25
    },
  ];*/

  return (
    <>
     <Newemployee value={handlecallback}/>
     <br></br>
     <Employeefilter/>


    </>


  );
}

export default App;
