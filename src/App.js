import './App.css';
import React,{useState} from 'react';
import Login from './component/login'
import Employeesdata from './component/employeesdata';
import Newemployee from './component/newemployee';
//import Employeeform from './component/employeeform';
import Employeefilter from './component/employeefilter';
//import Employee from './component/employee';

function App() {
  //const [value,setvalue] =useState('');
  //const handlecallback = (event) =>{
  //  setvalue({value:event});
  //  console.log(value);


  const employees = [
    {
      id: '12345',
      name: 'Akhil',
      age: 20
    },
    {
      id: '23451',
      name: 'Aman',
      age: 21
    },
  {
      id: '12367',
      name: 'Vikas',
      age: 22
    },
  {
      id: '43251',
      name: 'Harminder',
      age: 23
    },
  {
      id: '32417',
      name: 'Deeksha',
      age: 24
    },
  {
      id: '65732',
      name: 'Puneet',
      age: 25
    },
    {
      id: '98765',
      name: 'Sourav',
      age: 23
    },
    {
      id: '43251',
      name: 'Harminder',
      age: 23
    },
  {
      id: '32417',
      name: 'Deeksha',
      age: 24
    },
  {
      id: '65732',
      name: 'Puneet',
      age: 25
    },
    {
      id: '98765',
      name: 'Sourav',
      age: 23
    }
  ];
  //
  const [value,setvalue] = useState(employees);
        const saveDetails = (value) => {
          setvalue((val) =>{
          return[value,...val]
          })
        }
        const  [age,setage] = useState('all');
            const SaveAge = (va) =>{
              console.log(va)
              setage((age)=>{

                return va;
              })
            }

  return (
   <>
       <Login/>
       < Newemployee  saveDetails={saveDetails}/>
  <br></br>
  <Employeefilter SaveAge = {SaveAge} />
  <Employeesdata data = {value}  age ={age} />
    </>
  )
}

export default App;
