import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Login from "./components/loginForm";
import Home from "./pages/home";
import ProfilePage from "./pages/profilePage";
import Upload from "./pages/upload";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/upload" element={<Upload />} />
      <Route index element={<Home />} />
      <Route path='/profile-page' element={<ProfilePage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
