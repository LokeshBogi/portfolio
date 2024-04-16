import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Education from './components/Education/education';
import Achievements from "./components/Achievements/achievements";
import Courses from "./components/Courses/courses"

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Skills/>
     <Education/>
     <Courses/>
     <Achievements/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
