import React, { useEffect, useState } from 'react'

const getItem=()=>{
    let list=localStorage.getItem('mylist');
        if (list) {
            return JSON.parse (localStorage.getItem('mylist'))
        }
        else{
            return [];
        }
}
const Todo = () => {
 const [todo , addTodo] =useState()
 const [loop ,setLoop]=useState(getItem())


 const changeTodo=(event)=>{
addTodo(event.target.value)
 }

 const addSubmit=(event)=>{
event.preventDefault();
if (todo){
const myObj={
name:todo,
id: new Date().getTime().toString()
}
setLoop([...loop, myObj])
}
// console.log(todo)

else{
   
  alert('plz fill item')
}
addTodo('')
 }
 const deletItem=(id)=>{
    const delet= loop.filter((val)=>{
        return val.id !== id;
    })
    setLoop(delet)
 }

 useEffect(()=>{
    localStorage.setItem('mylist',JSON.stringify(loop))
 },[loop])
  return (
   <>
     <div className='container'>
        <div className='row m-5'>
            <h1 className='text-center'>Add Item</h1>
            <div className='col-10 m-3 d-flex'>
<input type='text' className='form-control offset-4' value={todo} onChange={changeTodo}></input>
<button className='ms-3 fs-3 rounded-pill w-25' onClick={addSubmit}>+</button>
            </div>
        {
            loop.map((val,id)=>{
                return(
                    <>
                <div className='row' key={id}>
            <div className='col-10 m-3 d-flex'>
<input type='text' className='form-control offset-4' placeholder={val.name}></input>
{/* <button className='ms-3 fs-3 rounded-pill w-25'></button> */}
<button className='ms-3 fs-3 rounded-pill w-25' onClick={()=>{deletItem(val.id)}}>-</button>

            </div>
            </div>
            </>
)
            })
     
        }
        </div>
     </div>
   </>
  )
}

export default Todo



// import React,{useEffect, useState} from 'react'
// // import "./todo.css"

// const getLocal=()=>{
//     let list=localStorage.getItem('mylist');
//     if (list) {
//         return JSON.parse (localStorage.getItem('mylist'))
//     }
//     else{
//         return [];
//     }
// }

// const Todo = () => {
//     const [todo, setTodo] = useState('')
//     const [add,setAdd]=useState(getLocal())
//     const[toggle , setToggle]=useState(true)
//     const [adit, setAdit] = useState(null)


//     const addFunc=(event)=>{
//         event.preventDefault();
        
//         if (todo) {
//  const myObj={
// id:new Date().getTime().toString(),
// name:todo
//  }
// setAdd([...add ,myObj])
//     }else if(todo&& !toggle){
//         setAdd(
//             add.map((val)=>{
// if(val.id===adit){
//     return {...val,name:todo}
// }
// return val;
//             })
//         )
// //         setToggle(true)
// // setTodo('')
// // setAdit(null);
//     }
//     else{
//         alert('plz fill Data')
//     }
// setTodo('')
//     }
//     const deletFunc=(id)=>{
// const data=add.filter((val)=>{
// return val.id!==id;
// })
// setAdd(data);
//     }
//     const aditItem=(id)=>{
// const item= add.find((val)=>{
// return val.id===id

// })
// setToggle(false)
// setTodo(item.name)
// setAdit(id);

//     }
//     useEffect(()=>{
// localStorage.setItem('mylist',JSON.stringify(add))
//     },[add])
//   return (
//     <>
//     <div style={{marginTop:"2%"}}>
// <h1 className='list' style={{marginLeft:"41%"}}>my list </h1>
// <div>
//     <div className='main-div15'style={{marginLeft:"37%" }}>
//   <input type='text' name='' id='' placeholder='add item' value={todo} onChange={(event)=>{setTodo(event.target.value)}}></input>
//   {
//     toggle ?<button className='btn fw-bold mb-2 fs-2 text-primary' onClick={addFunc}>+</button>:<button className='adit-btn' onClick={addFunc}>Adit</button>
//   }
  
//     </div>
// </div>
// </div>
// {
//     add.map((val)=>{
//         return(
//             <>
//             <div className='mydiv' style={{marginTop:"1.5%"}} key={val.id}>
// <h3 className='h345'>{val.name}</h3>
// <div style={{display:'flex'}} >
// <div style={{marginRight:'15%',}}>
// <button className='adit-btn' onClick={()=>aditItem(val.id)}>Adit</button></div>
// <div style={{marginLeft:'10%'}}>
// <button className='delet-btn' onClick={()=>deletFunc(val.id)}>-</button>
// </div>
// </div>
// </div>
//             </>
//         )
//     })
// }
//     </>
//   )
// }

// export default Todo