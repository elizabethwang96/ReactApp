/* eslint-disable no-unused-vars */
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignup from "./LoginPage/LoginSignup";
import Message from "./MessagePage/Message";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginSignup />} />
        <Route path="login" element={<LoginSignup />} />
        <Route path="message" element={<Message />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
