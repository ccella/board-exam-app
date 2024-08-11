import { Container, List, ListItem, ListItemText } from '@mui/material';
import React, { useEffect, useState } from 'react';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5437/users/getAllUsers')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => {
        console.error('Error fetching users:', error);
        setError(true);
  });
  }, []);

  if (error) {
    return <div style={{ color: 'red', marginTop: '1em' }}>Unable to fetch users</div>
  }

  return (
    <Container>
      <h2>Users</h2>
      <List>
        {users.map(user => (
          <ListItem key={user.id}>
            <ListItemText primary={user.username} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default UsersList;