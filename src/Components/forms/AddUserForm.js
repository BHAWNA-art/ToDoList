import React, { useState } from 'react'


const AddUserForm = props => {
	const initialFormState = { id: null, name: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			{/* <label>Name</label> */}
			<div className="ui huge icon input" id="section">
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			{/* <label>Username</label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} /> */}
			<button className="ui icon button"><i id="add" className="big plus circle icon"></i></button>
			</div>
            
		</form>
	)
}

export default AddUserForm