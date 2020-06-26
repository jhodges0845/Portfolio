import React from 'react';
import "./App.css"
import Sketch from "./components/sketches/Sketch";
import Header from "./components/layout/Header";
import About from "./components/layout/About";
import Skill from "./components/layout/Skills";
import Showcase from "./components/layout/Showcase";
import Contact from "./components/layout/Contact";

export class App extends React.Component {

  state = {
    navLinks: [
        {
            id: 1,
            title: 'About',
            url: '#About',
            active: true
        },
        {
            id: 2,
            title: 'Skills',
            url: '#Skills',
            active: false
        },
        {
            id:3,
            title: 'Showcase',
            url: '#Showcase',
            active: false
        },
        {
            id:4,
            title: 'Contact',
            url: '#Contact',
            active: false
        }
    ]
}

setActive = (id) =>{
  this.setState({nanLinks: this.state.navLinks.map((navLink) =>{
    if(navLink.id === id){
      navLink.active = true;
    }else{
      navLink.active = false;
    }
    return console.log(navLink.id);
  }) });

}

render = () =>{
    return (
      <div className="App">
        <div className="navbar">
          <Header navLinks={this.state.navLinks} setActive={this.setActive}/>
        </div>

        <Sketch />
        
        <div id="About" className="about section">
          <h1>About</h1>
          <About />
        </div>

        <div id="Skills" className="skills section">
        <h1>Skills</h1>
          <Skill />
        </div>

        <div id="Showcase" className="showcase section">
        <h1>Showcase</h1>
          <Showcase />
        </div>

        <div id="Contact" className="contact section">
          <h1>Contact</h1>
            <Contact />
        </div>

      </div>
    );
  }
}

export default App;
