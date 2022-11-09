import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/loginForm";
import Home from "./pages/home";
import NotLoggedIn from "./pages/NotLoggedIn";
import ProfilePage from "./pages/profilePage";
import Upload from "./pages/upload";
import ThemeModeContext from "./ThemeMode";
import { useState } from 'react';
function 
App() {
  const [mode, setMode] = useState(false);
  return (
    
    <ThemeModeContext.Provider value={[mode,setMode]} >
      <BrowserRouter>
      <Routes>
        <Route  path="/upload" element={<Upload />} />
        <Route path='/notloggedin' element={<NotLoggedIn />} />
        <Route index element={<Home />} />
        <Route path='/profile-page' element={<ProfilePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </ThemeModeContext.Provider>
  );
}

export default App;
