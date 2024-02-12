import Hero from "../components/Hero/Hero";
import Navigation from "../components/Navigation/Navigation";
import logo from '../assets/Content team-rafiki.png'
import {Link }  from "react-router-dom"
const Home = () => {
    return ( 
       <>
        <Navigation/>
        <Hero
         cName="hero"
         heroImg={logo}
         title='Welcome to NoteStack'
         text='Create your to do list and stay organized with our simple and efficient website. Never miss a task with our intuitive interface and customizable features.'

        />

        {/* <Footer></Footer> */}
       </>
     );
}
 
export default Home;