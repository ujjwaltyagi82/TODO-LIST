import React, { useState } from 'react';

import './index.css'

function App() {

  const [input, setinput] = useState("")
  const [items, setitem] = useState([])

  const item = (task) => {
    setinput(task.target.value)

  }

  const additem = () => {
    setitem((old) => {
      return [...old , input];

    })
    setinput("")
  }

  return (
    <>
      <div className="Main_div">
        <div className="Center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a items" value = {input} onChange={item} />
          <button onClick={additem}> + </button>

          <ol>

            {items.map((values) => {

              return <li> {values} </li>

            })}

          </ol>
        </div>
      </div>
    </>


  );
}

export default App;
