import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/MA-2100-VH-product" element={<Page1 />} />
        <Route path="/ZEF3000-1100h-product" element={<Page2 />} />
        <Route path="/MA3800H-PRO-product" element={<Page3 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
