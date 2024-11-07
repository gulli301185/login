import { Login } from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Main from "./components/pages/Main";
import About from "./components/linkPages/About";
import Number from "./components/linkPages/Number";
import Adress from "./components/linkPages/Adress";

function App() {
  return (
    <>
      <Main />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/number" element={<Number />} />
        <Route path="/adress" element={<Adress />} />
      </Routes>
    </>
  );
}

export default App;
