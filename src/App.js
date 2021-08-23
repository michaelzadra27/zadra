import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar'
import Main from './components/main'
import Footer from './components/footer'
import AboutMe from './components/aboutMe'
import Projects from './components/projects'
import Tech from './components/tech'
import FormPage from './components/FormPage'

function App() {
  return (
      <div className="App">
      <div className="row rowHeight">
        <Navbar />
        </div>
        <div className="row rowHeight">
        <Main />
      </div>
      <div className="row smallRow">
        <Footer />
      </div>
      <div className="row rowSection" id="aboutMeAnchor">
      <AboutMe />
      </div>
      <div className="row rowSection" id="projectsAnchor">
      <Projects />
      </div>
      <div className="row rowSection" id="techAnchor">
      <Tech />
      </div>
      <div className="row smallRow" id="contactAnchor">
      <FormPage />
      </div>
    </div>
  );
}

export default App;
