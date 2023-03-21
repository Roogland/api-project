import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <ul className='user'>
      {listOfUsers.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;

