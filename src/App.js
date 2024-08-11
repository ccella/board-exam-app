import { Box } from '@mui/material';
import './App.css';
import Button from '@mui/material/Button';
import UsersList from './components/usersList';

function App() {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
        bgcolor: 'skyblue' 
      }}
    >
      <Button variant="contained">
        Hello World
      </Button>
      <UsersList />
    </Box>
  );
}

export default App;
