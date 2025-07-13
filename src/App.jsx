import { useState } from "react";
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import Projects_Page from "./pages/Projects_Page";
import Footer from "./Components/Footer";

function App() {

  const [page, setPage] = useState("Home");

  const navigate = (to)=>{
    setPage(to);
  }

  return (
    <>
      <NavBar navigate = {navigate} />
      {page == "Projects" ? <Projects_Page /> : <Home />}
      <Footer navigate = {navigate} />
    </>
  )
}

export default App
