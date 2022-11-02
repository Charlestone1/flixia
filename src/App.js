import GlobalStyles from "./stlyes/GlobalStyles";

import { ThemeProvider } from "styled-components";
import { light } from "../src/stlyes/Themes";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/signup" element={<SignIn />} exact />
          <Route path="/login" element={<Login />} exact />
        </Routes>
        {/* </Router> */}
      </ThemeProvider>
    </>
  );
}

export default App;
