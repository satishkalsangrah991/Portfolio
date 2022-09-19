// import React, { useState } from 'react'

// const Contact = () => {
//  const[data ,setData]= useState({
//   name:'',
//   email:'',
//   password:'',
//   phone:''
//  })
//  const [submit, setSubmit] = useState([])

//  const changeContact=(event)=>{
// const name= event.target.name
// const  value= event.target.value
// setData({...data,[name]:value})
// }

//  const submitData=(event)=>{
// event.preventDefault();
// const {name ,email,password,phone}=data;
// if(name && email && password && phone){
// const obj={
//   ...data,
//   id:new Date().getTime().toString()
// }
// setSubmit([...submit,obj])
// }

// else{
//   alert('piz fill data')
// }
// console.log(submit)
// setData({
//   name:'',
//   email:'',
//   password:'',
//   phone:''
// })

//  }
//   return (
//     <>
// <div className='container-fuild bg-light'>
//     <div className='row m-5'>
//         <div className='col-12  text-center text-warning mt-3'>
//             <h1>Contact Us</h1>
//             <form>
//   <div class="mb-3">
//     <label for="exampleInputEmail1" class="form-label mb-3 fs-4 text-black">Email</label>
//     <input type="email" name='email' class="form-control w-50 offset-3" 
//     value={data.email} onChange={changeContact} id="exampleInputEmail1" aria-describedby="emailHelp"/>
//     {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
//   </div>
//   <div class="mb-3">
//     <label for="exampleInputName" class="form-label mb-3 fs-4 text-black">Name</label>
//     <input type="text" name='name' class="form-control w-50 offset-3"  value={data.name} onChange={changeContact} id="exampleInputName"/>
//   </div>
//   <div class="mb-3">
//     <label for="exampleInputPassword1" class="form-label mb-3 fs-4 text-black">Password</label>
//     <input type="password"  name='password' class="form-control w-50 offset-3"  value={data.password} onChange={changeContact} id="exampleInputPassword1"/>
//   </div>
//   <div class="mb-3">
//     <label for="exampleInputNumber" class="form-label mb-3 fs-4 text-black">Number</label>
//     <input type="number" name='phone' class="form-control w-50 offset-3"  value={data.phone} onChange={changeContact} id="exampleInputNumber"/>
//   </div>
//   {/* <div class="mb-3 form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
//     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   </div> */}
//   <button type="submit" class="btn btn-primary mb-3" onSubmit={submitData}>Submit</button>
// </form>
//         </div>
//     </div>
// </div>
//    {
//          submit.map((val)=>{
//  return(
//      <>
//          <div className='flex-sb2'>
//          <div className='flex-container2'>
//          <h3 className='h-333'>Email:= {val.email}</h3>
//          <h3>Password:= {val.password}</h3>
//          <h3>Name:= {val.name}</h3>
//          <h3>phone:= {val.phone}</h3>
//          </div>
//          </div>
//      </>
//  )
//          })
//     }
//     </>
//   )
// }

// export default Contact


import React, { useState } from 'react'
// import "./contact.css"
const Contact = () => {
   const[userData,setUserData] =useState({
    username:"",
    email:"",
    password:"",
    phone:""
   })
   const [submit , setSubmit]=useState([])

   const changeContact=(event)=>{
const name= event.target.name
const value= event.target.value
setUserData({...userData,[name]:value})
   }
   const submitData=(event)=>{
event.preventDefault();

// create new object....
 const {username ,email ,password ,phone}=userData;
if (username && email && password && phone) {
    

const myObj={
...userData,
id:new Date().getTime().toString()
}

setSubmit([...submit,myObj])
}
else{
    alert('plz fill data')
}
// console.log(submit)
setUserData({
    username:"",email:'',password:"",phone:""
})
console.log(userData)
   }
   
  return (
   <>
   <div className='container-fulid'>
   <div className='row m-5'>
    
    <div className='main-div1 col-md-9 col-sm-12 text-center mt-3'>
    <h1 className=' col-9 offset-3 text-warning'>contact us </h1>
        <form action='' className='form-css' onSubmit={submitData}>
            <div className='radhe-css offset-2'>
            <div>
                    {/* <label htmlFor=''>Fullname</label> */}
                 <input type="text" name="username"  className='m-4 form-control ' id='username' autoComplete='off' placeholder='Name' value={userData.username} onChange={changeContact}></input>
                </div>
                <div className='kanha-css'>
                    {/* <label htmlFor=''>Email</label> */}
                 <input type="email" name="email" className='m-4  form-control ' id='email' autoComplete='off' placeholder='Email'  value={userData.email} onChange={changeContact}></input>
                </div>
                <div>
                    {/* <label htmlFor=''>Password</label> */}
                 <input type="password" name="password" className='m-4  form-control' id='password' autoComplete='off' placeholder='Password'  value={userData.password} onChange={changeContact}></input>
                </div>
                <div>
                    {/* <label htmlFor=''>Phone</label> */}
                 <input type="number" name="phone" className='m-4 form-control' id='phone' autoComplete='off' placeholder='Phone Number'  value={userData.phone} onChange={changeContact}></input>
                </div>
                <button className='btn btn-light' id='contact'>Ragister</button>
            </div>
        </form>
    </div>
    </div>
    </div>
    {
        submit.map((val)=>{
return(
    <>
        <div className='flex-sb2'>
        <div className='flex-container2'>
        <h3 className='h-333'>Email:= {val.email}</h3>
        <h3>Password:= {val.password}</h3>
        <h3>Name:= {val.username}</h3>
        <h3>phone:= {val.phone}</h3>
        </div>
        </div>
    </>
)
        })
    }
   </>
  )
}

export default Contact