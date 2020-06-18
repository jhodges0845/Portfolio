import React from 'react';
import "./App.css"
import Sketch from "./components/sketches/Sketch"
import Header from "./components/layout/Header"

export class App extends React.Component {

  state = {
    navLinks: [
        {
            id: 1,
            title: 'About',
            url: '#',
            active: true
        },
        {
            id: 2,
            title: 'Skills',
            url: '#',
            active: false
        },
        {
            id:3,
            title: 'Showcase',
            url: '#',
            active: false
        },
        {
            id:4,
            title: 'Contact',
            url: '#',
            active: false
        }
    ]
}

setActive = (id) =>{
  this.setState({nanLinks: this.state.navLinks.map(navLink =>{
    if(navLink.id === id){
      navLink.active = true;
    }else{
      navLink.active = false;
    }
  }) });

}

render = () =>{
    return (
      <div className="App">
        <Sketch />

        <div className="navbar">
          <Header navLinks={this.state.navLinks} setActive={this.setActive}/>
        </div>
        
        <div className="about section">
          <h1>About</h1>
          <hr />
          <p>
          Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type 
            specimen book. It has survived not only five 
            centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of 
            Letraset sheets containing Lorem Ipsum passages, and 
            more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div className="skills section">
        <h1>Skills</h1>
          <p>
          Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type 
            specimen book. It has survived not only five 
            centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of 
            Letraset sheets containing Lorem Ipsum passages, and 
            more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div className="showcase section">
        <h1>Showcase</h1>
          <p>
          Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type 
            specimen book. It has survived not only five 
            centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of 
            Letraset sheets containing Lorem Ipsum passages, and 
            more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div className="contact section">
        <h1>Contact</h1>
          <p>
          Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a 
            galley of type and scrambled it to make a type 
            specimen book. It has survived not only five 
            centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of 
            Letraset sheets containing Lorem Ipsum passages, and 
            more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

      </div>
    );
  }
}

export default App;
