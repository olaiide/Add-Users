import React, { useState, Fragment } from 'react';
import AddUsers from './components/Users/AddUsers'
import './App.css';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
   setUsersList((prevList)=> {
   return [...prevList, {name : uName, age : uAge, id : Math.random().toString()}]
   })
  }

  return (
    <Fragment>
     <AddUsers onAddUser={addUserHandler} />
     <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
