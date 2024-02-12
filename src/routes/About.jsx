import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import logo from '../assets/Programming-pana.png'
const About = () => {
    return ( 
        <div className="about">
            <Navigation/>
            <Hero
         cName="hero reverse"
         heroImg={logo}
         title='About US'
         text="We're more than just a note-taking app, we're your knowledge hub. Tired of information scattered across emails, docs, and your brain? NoteStack gathers it all in one beautiful, searchable space."
        />
        </div>
     );
}
 
export default About;