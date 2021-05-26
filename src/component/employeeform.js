import React,{useState} from 'react';
// import Form from 'react-bootstrap/Form';

export default function Employeeform(props){
  const [value,setvalue] = useState({
    id:Math.random().toString().substr(2,8),
    Name:"",
    Age:"",
    Email:"",

  })

  const handlenamechange = (event)=>{
    setvalue({...value,Name:event.target.value})
  }
  const handleagechange = (event)=>{
    setvalue({...value,Age:event.target.value})
  }
  const handleemailchange = (event)=>{
    setvalue({...value,Email:event.target.value})
  }
  function submit(e){
    e.preventDefault();
    console.log(value);
    props.details(value);
  }


  return (

    <form onSubmit={submit}>

  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={value.Email} onChange={handleemailchange}/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Name" value={value.Name} onChange={handlenamechange}/>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Age</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Age" value={value.Age} onChange={handleagechange}/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>

  )

}

