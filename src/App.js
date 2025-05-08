import './App.css';
import {Button, Typography} from "@mui/material";

function App() {
  return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Typography variant="h4" gutterBottom>
              MUI is working!
          </Typography>
          <Button variant="contained" color="primary">
              Click Me
          </Button>
      </div>
  );
}

export default App;
