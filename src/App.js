import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/loginForm";
import Home from "./pages/home";
import { ChakraProvider } from '@chakra-ui/react'
import ProfilePage from "./pages/profilePage";
import Upload from "./pages/upload";
function App() {
  return (
    <BrowserRouter>
    <ChakraProvider>
    <Routes>
      <Route  path="/upload" element={<Upload />} />
      <Route index element={<Home />} />
      <Route path='/profile-page' element={<ProfilePage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
