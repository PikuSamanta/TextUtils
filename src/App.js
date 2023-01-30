import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been Enable", "success");
      // document.title = "TextUtils - Darkmode"
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been Enable", "success");
      // document.title = "TextUtils - Lightmode"
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Textutils"
          aboutText="About Textutils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="container my-3">
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the Text"
                  mode={mode}
                />
              </div>
            }
          />
            
            <Route
              exact
              path="about"
              element={
                <div className="container my-3">
                  <About mode={mode} />
                </div>
              }
            />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
