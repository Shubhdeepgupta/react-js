// // import logo from './logo.svg';
// import React, { useState } from "react";
// import "./App.css";
// import About from "./components/About";
// import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
// import Alert from "./components/Alert";

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// function App() {
//   const [mode, setMode] = useState("light"); // weather dark mode is enabled or not

//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type)=> {
//     setAlert({
//       msg: message,
//       type: type,
//     });
//     setTimeout(() => {
//       setAlert(null);
//     }, 1500);
//   };

//   const toggleMode = () => {
//     if (mode === "light") {
//       setMode("dark");
//       document.body.style.backgroundColor = "#042743";
//       showAlert("Dark mode has been enabled", "success");
//       document.title = "TextUtils - Dark Mode";

//       // To set the timer in the title to show the text in the browser

//       // it updateds the title which shows in the browser
//       // setInterval(() => {
//       //   document.title = 'TextUtils is Amazing Today';
//       // }, 2000);
//       // setInterval(() => {
//       //   document.title = 'Installed TextUtils now';
//       // }, 1000);
//     } else {
//       setMode("light");
//       document.body.style.backgroundColor = "white";
//       showAlert("Light mode has been enabled", "success");
//       document.title = "TextUtils - Light Mode";
//     }
//   };

//   return (
//     <>
//     {/* <Navbar></Navbar>        {/*It imports Navbar automatically*/}
//     {/* <Navbar title = "TextUtils" aboutText="About TextUtils"></Navbar>       {/* initialise props */}
//     <Router>
//     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
//         {/* initialise props */}
//     <Alert alert={alert}/>
//     <div className="container my-3">
//     <Routes>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/">
//             <TextForm showAlert={showAlert} heading="Enter the text to modify here" mode={mode}/>
//           </Route>
//     </Routes>
//     </div>
//     </Router>
//     </>
//   );
// }

// export default App;


import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
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
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
    {/* <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode} /> */}
    {/* <Navbar/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to modify here" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
