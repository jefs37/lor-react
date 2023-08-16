import React, {useState, useEffect} from 'react'

function Lor() {
  const [stats, setStats] = useState('')
  const [username, setUsername] = useState('')
  
/*  useEffect(() => {
    fetch('/finduser')
    .then(response => response.json()
    .then(data => {
      console.log(data)
      setStats(data.metadata)
    })
    )}, []);
*/
  const userSubmit = (e) => {
    e.preventDefault()
    const userQuery = {username}

    fetch('/finduser', {
      method: 'POST',
      headers: {"Content-type" : "application/json"},
      body: JSON.stringify(userQuery)
    }).then(
      response => response.json()
      ).then(
        data => {
          console.log(data)
          setStats(data)
        }
      )
  }

  return (
    <div className = 'Lor'>
      <h1>last played deck search</h1>
      <form onSubmit={userSubmit}>
        <label>Username:</label>
        <input
          type = 'text'
          required
          value = {username}
          onChange = {(e) => setUsername(e.target.value)}
        />
        <button>search user</button>
      </form>
      <p></p>
      {username} stats
      <p></p>
      {JSON.stringify(stats)}
    </div>
  )
}

export default Lor