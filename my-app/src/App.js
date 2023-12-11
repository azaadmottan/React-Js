import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TextForm from "./components/TextForm";
import AboutUs from "./components/AboutUs";
import Alert from "./components/Alert";
// import { BrowserRouter as Main, Routes, Route, BrowserRouter } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [bgColor, setBgColor] = useState('#ececfa');

  const toggleMode = () => {

    if (mode === 'light') {

      setMode('dark');
      setBgColor('#1f1d1d');
      showAlert('Dark mode enabled !', 'success');
      document.body.style.backgroundColor = '#243242';
    }
    else {

      setMode('light');
      setBgColor('#ececfa');
      showAlert('Light mode enabled !', 'success');
      document.body.style.backgroundColor = 'white';
    }
  }

  const [alert, setAlert] = useState(false);

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      typ: type
    });

    setTimeout(() => {

      setAlert(null);
    }, 2500);
  }

  return (
    <>
      <BrowserRouter>
      <Navbar title="code Master" aboutUs="About code Master" mode={mode} toggleMode={toggleMode} />

      <div className="container py-3 p-5 py-4" style={{ backgroundColor: mode === 'light' ? bgColor : bgColor }}>
        <Alert alert={alert} />


          <Routes>

            <Route exact path="/" element={<Home mode={mode} toggleMode={toggleMode} />} />

            <Route  exact path="/AboutUs" element={<AboutUs mode={mode} toggleMode={toggleMode} />} />

            <Route exact path="/TextForm" element={<TextForm heading="Text Manipulation" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />} />

            <Route path="*" element={<div className={`container fst-italic text-center text-${mode === 'light' ? 'dark' : 'white'}`}><h2>Sorry :) File <span style={{color: 'red'}}> Not Found</span></h2></div>} />

          </Routes>


      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
