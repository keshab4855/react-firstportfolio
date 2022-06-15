import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import { bootstrap } from "react-icons/fa";

function App() {
  return (
    <>
      <Home></Home>
      <Skills></Skills>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
    </>
  );
}

export default App;
