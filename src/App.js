import "./App.css";
import Navbar from "./component/header/Navbar";
import Hero from "./component/hero/Hero";
import Service from "./component/content/Service";
import Project from "./component/content/Project";

function App() {
  return <div className="">
    <Navbar/>
    <Hero />
    <Service />
    <Project />
  </div>;
  // return <div className="content"> 
  //   <Navbar/>
  //   <Hero />
  
  // </div>
}

export default App;
