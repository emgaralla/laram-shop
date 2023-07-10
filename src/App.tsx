import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./components/Sign/SignUp";
import SignIn from "./components/Sign/SignIn";
import Header from "./components/Header/Header";
import Sign from "./components/Sign/Sign";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/account" element={<Sign />} />
        <Route path="/auth" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
