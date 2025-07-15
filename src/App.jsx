import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import Projects_Page from "./pages/Projects_Page";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <NavBar  />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects_Page />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
