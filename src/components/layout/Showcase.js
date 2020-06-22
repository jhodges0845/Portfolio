import React from 'react';
import FlaskIcon from "../../icons/flaskIcon.png";
import DjangoIcon from "../../icons/djangoIcon.png";

export class Showcase extends React.Component {
    render(){
        return (
            <div>
                <h3>Template Sites</h3>
                <div className="flex-container">
                    <div style={{flex: 2}}>
                        <a href="https://hodges-express-showcase.herokuapp.com">
                            <i style={{color: "green"}} class="fab fa-node fa-4x"></i>
                        </a>
                    </div>

                    <div style={{flex: 2}}>
                        <a href="https://hodges-flask-showcase.herokuapp.com">
                        <img className="icon" style={{ width:75}} src={FlaskIcon} alt="Flask"/>
                        </a>
                    </div>

                    <div style={{flex: 2}}>
                        <a href="https://hodges-django-showcase.herokuapp.com">
                            <img className="icon" style={{height: 80}} src={DjangoIcon} alt="Django"/>
                        </a>
                    </div>

                </div>

                <h3>Production Sites</h3>
                <div className="flex-container">

                </div>

            </div>
        );
    }
}

export default Showcase;