import { Box } from '@mui/material';
import './App.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        bgcolor: 'skyblue' 
      }}
    >
      <Button variant="contained">
        Hello World
      </Button>
    </Box>
  );
}

export default App;
