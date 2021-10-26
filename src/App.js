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
    <div className="main ani">
      <Box sx={{ textAlign: "center" }}>
        <img
          src="https://www.tronic247.com/favicon.ico"
          style={{ transitionDelay: "1s" }}
          alt="Tronic247 logo"
        />

        <h1
          className="ani"
          style={{ transitionDelay: "1.2s" }}
        >
          Tronic247 Demos
        </h1>


        <p
          className="ani"
          style={{ transitionDelay: "1.4s" }}
        >
          Some Tests and Demos
        </p>


        <Button
          size="large"
          style={{ transitionDelay: "1.6s" }}
          variant="contained"
        >
          See the Demos (//////////)
        </Button>
      </Box>
    </div>
  );
}

export default App;
