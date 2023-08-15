import React, {useState, useEffect} from 'react'

function Lor() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch('/members')
    .then(response => response.json()
    .then(data => {
      console.log(data)
      setData(data)
    })
  )}, []);

  return (
    <div className = 'Lor'>
        icky
    </div>
  )
}

export default Lor