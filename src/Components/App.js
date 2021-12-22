import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import Modal from 'react-modal'
import Todos from "./Todos"

// const deleteUser = (id) => {
// 	alert(id);
// 	setModalIsOpen(true);
// 	const rendernewlist = users.filter((user)=>{
	  
// 		return user.id !== id;
		
// 	});
// 	setUsers(rendernewlist);
	
	
// 	setEditing(false);
// 	todoModal(id);
   
   
// }
// const todoModal = id => {
// 	if (modalIsOpen) {
// 		return (
// 			<Modal isOpen={modalIsOpen}>
// 				<h2>Confirm Delete</h2>
// 				<p>Do You Want To Delete?</p>
// 				<div>
// 					<button onClick={() => deleteUser(id)}>Delete</button>
// 					<button onClick={() => setModalIsOpen(false)}>Okay</button>
// 				</div>
// 			</Modal>
// 		)
// 	}
// }
const App = () => {
	// const [modalIsOpen,setModalIsOpen] = useState(false);
	
	// // Data
	// const usersData = [
	// 	{ id: 1, name: 'Tania', username: 'floppydiskette' },
	// 	{ id: 2, name: 'Craig', username: 'siliconeidolon' },
	// 	{ id: 3, name: 'Ben', username: 'benisphere' },
	// ]

	// const initialFormState = { id: null, name: '', username: '' }

	// // Setting state
	// const [ users, setUsers ] = useState(usersData)
	// const [name1,setName]= useState(usersData.name)
	// const [ currentUser, setCurrentUser ] = useState(initialFormState)
	// const [ editing, setEditing ] = useState(false)
	
	// // CRUD operations
	// const addUser = user => {
	// 	user.id = users.length + 1
	// 	setUsers([ ...users, user ])
	// }

	// const deleteUser = id => {
		
	// 	<Modal isOpen={modalIsOpen}>
			
	// 		<h2>Confirm Delete</h2>
	// 		<p>Do You Want To Delete?</p>
	// 		<div>
	// 			<button onclick={() => setModalIsOpen(false)}></button>
	// 		</div>
	// 	</Modal>
	// 	setEditing(false)

	// 	setUsers(users.filter(user => user.id !== id))
	// }

	// const updateUser = (id, updatedUser) => {
	// 	setEditing(false)

	// 	setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	// }

	// const editRow = user => {
	// 	setEditing(false)
		
	// 	setCurrentUser({ id: user.id, name: user.name, username: user.username })
	// }

	// return (
	// 	<div className="container" id="container">
	// 		<h1 className="ui container center" >ToDos App</h1>
	// 		<div className="flex-row">
	// 			<div className="flex-large">
	// 				{/* {editing ? (
	// 					<Fragment>
	// 						<h2>Edit user</h2>
	// 						<EditUserForm
	// 							editing={editing}
	// 							setEditing={setEditing}
	// 							currentUser={currentUser}
	// 							updateUser={updateUser}
	// 						/>
	// 					</Fragment>
	// 				) : ( */}
	// 					<Fragment>
	// 						<AddUserForm addUser={addUser} />
	// 					</Fragment>
	// 				{/* )} */}
	// 			</div>
	// 			<div className="flex-large">
	// 				 {editing ? (
	// 					<Fragment>
	// 						{/* <h2>Edit user</h2> */}
	// 						<EditUserForm
	// 							editing={editing}
	// 							setEditing={setEditing}
	// 							currentUser={currentUser}
	// 							updateUser={updateUser}
	// 						/>
							
	// 					</Fragment>
	// 				) : ( 
	// 					<Fragment>
	// 						{ <UserTable users={users} editRow={editRow}  setModalIsOpen={setModalIsOpen} deleteUser={deleteUser} setName={setName,name1} /> }
	// 					</Fragment>
	// 					)
	// 				} 
	// 				{/* <UserTable users={users} editRow={editRow}  deleteUser={deleteUser} /> */}
	// 			</div>
	// 		</div>
	// 	</div>
	// )
	return(
		<Todos />
	)
}

export default App

// editRow={editRow} <UserTable users={users} editRow={editRow}  deleteUser={deleteUser} />