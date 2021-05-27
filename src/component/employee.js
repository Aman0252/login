import React,{useState} from 'react';

export default function Employee(props){
  const[age,setage] = useState('');
  function submit(e){
    e.preventDefault();
    console.log(age);
    props.value(age)

  }
  const array = [18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
  return(
    <div>
         <div class="input-group-mb-3">
           <div class="input-group-prepend">
             <button onClick={submit} class="btn btn-outline-secondary" type="button">Button</button>
    </div>
    <select class="custom-select" id="inputgroupselect03" value={age} onChange={e=> setage(e.target.value)}>
      {array.map((item,index)=><option key={index} value={item}>{item}</option>)}

    </select>
    </div>
    </div>
  )
}
