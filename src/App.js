import "./App.css";
import Navbar from "./component/header/Navbar";
import Hero from "./component/hero/Hero";
import Service from "./component/content/Service";
import Project from "./component/content/Project";
import Counter from "./component/content/Counter";
import Works from "./component/content/Works";
import Testimonial from "./component/content/Testimonial";

function App() {
  return <div className="">
    <Navbar/>
    <Hero />
    <Service />
    <Project />
    <Counter />
    <Works />
    <Testimonial />
  </div>;
  // return <div className="content"> 
  //   <Navbar/>
  //   <Hero />
  
  // </div>
}

export default App;
