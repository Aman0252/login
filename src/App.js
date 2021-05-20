import './App.css';
import Employeesdata from './component/employeesdata';


function App() {
  const employees= [
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
  ];

  return (
    <>
    <Employeesdata data={employees}/>

    </>

  );
}

export default App;
