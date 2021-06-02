import React,{useState} from 'react';
// import Form from 'react-bootstrap/Form';

export default function Employeeform(props){
  const [value,setvalue] = useState({
    //id:Math.random().toString().substr(2,8),
    name:"",
    age:"",

  })

  const handlenamechange = (event)=>{
    setvalue({...value,name:event.target.value})
  }
  const handleagechange = (event)=>{
    setvalue({...value,age:event.target.value})
  }

  function submit(e){
    e.preventDefault();
    console.log(value);
    props.saveDetails({
      ...value,
      id:Math.random().toString().substr(2,5)

    });
    setvalue({name:'',age:''})
  }


  return (

    <form onSubmit={submit}>

  <div class="form-group">
    <label for="exampleInputPassword1">Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Name" value={value.name} onChange={handlenamechange}/>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Age</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Age" value={value.age} onChange={handleagechange}/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>

  )

}

