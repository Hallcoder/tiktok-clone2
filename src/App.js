import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/home";
import Upload from "./pages/upload";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/upload" element={<Upload />} />
      <Route index element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
