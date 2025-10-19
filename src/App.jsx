import { Header } from './components/Header';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './App.css';

function App() {
    return (
        <>
            <Header/>
            <About/>
            <Education/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default App;