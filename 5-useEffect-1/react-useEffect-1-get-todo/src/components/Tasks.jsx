import React, { useEffect, useState } from 'react'
import "./Tasks.css"

const Tasks = () => {

  const [tasks, setTasks] = useState([])


  let getUsers = async() => {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos")
    let data = await res.json()
    console.log(data)
    setTasks(data)
  }

  useEffect( () => {
    getUsers()
  }, [])


  

  return (
    <>
      {
        tasks.map( (ele) => {
          return <div className='box' key={ele.id}>
            <h2>User ID : {ele.userId}</h2>
            <h3>ID : {ele.id}</h3>
            <h1>Title : {ele.title}</h1>
            <p>Completed : {ele.completed}</p>
          </div>
        } )
      }
    </>
  )
}

export default Tasks