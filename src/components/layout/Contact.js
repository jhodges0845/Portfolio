import React from 'react';

export class App extends React.Component {

    render(){
        return (
            <div>
                <h5>Feel free to contact me with one of these methods</h5>

                <h3>Social Media</h3>
                <div >
                    {/* <div style={{flex: 1}} className="flex-container">
                        <i style={{flex: 3}} class="fab fa-facebook-f fa-2x"></i>
                        <b style={{flex: 3}}>https://www.facebook.com/jason.m.hodges.1</b>
                    </div> */}

                    <div style={{flex: 1}} className="flex-container">
                        <i style={{flex: 3}} class="fab fa-linkedin-in fa-2x"></i>
                        <b style={{flex: 3}}>https://www.linkedin.com/in/jason-hodges-60b2a9130/</b>
                    </div>
                    
                    <div style={{flex: 1}} className="flex-container">
                        <i style={{flex: 3}} class="fab fa-github fa-2x"></i>
                        <b style={{flex: 3}}>github.com/jhodges0845</b>
                    </div>

                    <div style={{flex: 1}} className="flex-container">
                        <i style={{flex: 3}} class="fas fa-envelope fa-2x"></i>
                        <b style={{flex: 3}}>jasonhodges0845@gmail.com</b>
                    </div>

                    {/* <div style={{flex: 1}} className="flex-container">
                        <i style={{flex: 3}} class="fas fa-phone fa-2x"></i>
                        <b style={{flex: 3}}>+1(662)417-9130</b>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default App;