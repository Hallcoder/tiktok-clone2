import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/loginForm";
import Home from "./pages/home";
import NotLoggedIn from "./pages/NotLoggedIn";
import ProfilePage from "./pages/profilePage";
import Upload from "./pages/upload";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/upload" element={<Upload />} />
      <Route path='/notloggedin' element={<NotLoggedIn />} />
      <Route index element={<Home />} />
      <Route path='/profile-page' element={<ProfilePage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
