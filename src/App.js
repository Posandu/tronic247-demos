import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import "./App.css";


function App() {
  return (
    <main>
      <Hero />
    </main>
  );
}

function Hero() {
  return (
    <div className="main">
      <Box sx={{textAlign:"center"}}>
      <img src="https://www.tronic247.com/favicon.ico" alt=""/>
      <h1>Tronic247 Demos</h1>
      <p>Some Tests and Demos</p>
      <Button size="large" variant="contained">See the Demos</Button>
      </Box>
    </div>
  );
}

export default App;
