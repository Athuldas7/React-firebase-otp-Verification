import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterForm from "@components/forms/register-form";
import LoginPage from "@pages/login-page";
import HomePage from "./components/home-page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;