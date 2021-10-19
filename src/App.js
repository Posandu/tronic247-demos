import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Dialog from "@mui/material/Dialog";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Alert from "@mui/material/Alert";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import APIURL from "./config.js";
import hero from "./App.css";

function App() {
  return (
    <main>
      <Hero />
    </main>
  );
}

function Hero() {
  const [name, setrealname] = useState("Stranger");
  const [dialog, setdialog] = useState(false);
  const [inputvalue, setinputvalue] = useState("");

  const close = () => {
    setdialog(false);
  };

  const open = () => {
    setdialog(true);
  };

  const setusername = () => {
    if (inputvalue) {
      setrealname(inputvalue);
    } else {
      setrealname("Stranger");
    }
    setdialog(false);
  };

  const setrealinputvalue = (e) => {
    setinputvalue(e.target.value);
  };

  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current.getValue());
  }

  return (
    <div className="hero">
      <Editor
        height="90vh"
        width="50%"
        defaultLanguage="javascript"
        theme="vs-dark"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
      />
      <Box sx={{ marginLeft: "30px" }}>
        <Typography variant="h2">Hello {name}</Typography>
        <Button size="large" variant="outlined" onClick={open}>
          I have a name
        </Button>
      </Box>
      <Dialog open={dialog} onClose={close}>
        <Box sx={{ padding: "20px" }}>
          <TextField
            label="Name"
            onChange={setrealinputvalue}
            variant="standard"
          />
          <br />
          <br />
          <Button variant="outlined" onClick={setusername}>
            Set My Name
          </Button>
        </Box>
      </Dialog>
    </div>
  );
}

export default App;
