import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      {/* <label>Name</label> */}
      <div className="ui huge icon input" id="section">
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      {/* <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} /> */}
      <button className="ui icon button"><i id="add" className="big check icon"></i></button>
      {/* <button className="ui icon button" onClick={() => props.setEditing(false)} >
      <i id="cross1" className="big close icon"></i>
      </button> */}
      </div>
    </form>
  )
}

export default EditUserForm