import React  from 'react';
import ArduinoIcon from "../../icons/arduinoIcon.png";
import ASPIcon from "../../icons/ASPNet.png";
import SequelizeIcon from "../../icons/sequelizeIcon.png";
import FlaskIcon from "../../icons/flaskIcon.png";
import DjangoIcon from "../../icons/djangoIcon.png";
import PythonIcon from "../../icons/pythonIcon.png";
import CSharpIcon from "../../icons/cSharp.png";
import WindowsIcon from "../../icons/windowsIcon.png";
import LinuxIcon from "../../icons/linuxIcon.png";
import SqlAlchemyIcon from "../../icons/sqlAlchemyIcon.png";
import HTMLIcon from "../../icons/htmlIcon.png";
import JSIcon from "../../icons/ES6Icon.png";
import TSQLIcon from "../../icons/TSQLIcon.png";
import PostgresIcon from "../../icons/postgresIcon.png";
import SQLiteIcon from "../../icons/SQLiteIcon.png";
import MongoDBIcon from "../../icons/mongodbIcon.png";
import OPCIcon from "../../icons/OPCIcon.png";
import PIIcon from "../../icons/osisoftPiIcon.png";
import RaspberryPiIcon from "../../icons/raspberryPiIcon.png";
import ExpressIcon from "../../icons/expressIcon.jpg";

export class Skill extends React.Component{
    render(){
        return(
            <div>
                <h3>OperatingSystems</h3>
                <div className="flex-container">
                    <div style={{flex: 1}}>
                        <img className="icon" style={{ width:65}} src={WindowsIcon} alt="Windows"/>
                    </div>

                    <div style={{flex: 1}}>
                        <img className="icon" style={{ width:65}} src={LinuxIcon} alt="Linux"/>
                    </div>
                </div>

                <h3>Programming/Scripting Languages</h3>
                <div className="flex-container">
                    <div style={{flex: 1}}>
                        <img className="icon" style={{ width:65}} src={CSharpIcon} alt="C#"/>
                    </div>

                    <div style={{flex: 1}}>
                        <img className="icon" style={{ width:75}} src={JSIcon} alt="ES6"/>
                    </div>

                    <div style={{flex: 1}}>
                        <img className="icon" style={{ width:65}} src={PythonIcon} alt="Python"/>
                    </div>

                    <div style={{flex: 1}}>
                        <i style={{color: "green"}} class="fab fa-node fa-4x"></i>
                    </div>
                </div>

                <h3>Front-End Basics</h3>
                <div className="flex-container">

                    <div style={{flex: 1}}>
                        <img className="icon" style={{ width:65}} src={HTMLIcon} alt="HTML5"/>
                    </div>

                    <div style={{flex: 1}}>
                        <i class="fab fa-css3-alt fa-4x"></i>
                    </div>

                </div>

                <h3>Front-End Framework</h3>
                <div className="flex-container">

                    <div style={{flex: 1}}>
                        <i style={{color: "blue"}}class="fab fa-react fa-4x"></i>
                    </div>
                </div>

                <h3>Back-End Frameworks</h3>
                <div className="flex-container">

                    <div style={{flex: 1}}>
                        <img className="icon" style={{ width:65}} src={ExpressIcon} alt="ExpressJS"/>
                    </div>

                    <div style={{flex: 1}}>
                        <img className="icon" style={{ width:65}} src={ASPIcon} alt="ASPNet"/>
                    </div>

                    <div style={{flex: 1}}>
                        <img className="icon" style={{height: 80}} src={DjangoIcon} alt="Django"/>
                    </div>

                    <div style={{flex: 1}}>
                        <img className="icon" style={{ width:75}} src={FlaskIcon} alt="Flask"/>
                    </div>
                </div>

                <h3>Object Relational Mapping (ORM)</h3>
                <div className="flex-container">
                    <div style={{flex: 1}}>
                        <img className="icon" style={{ width:65}} src={SequelizeIcon} alt="Sequelize"/>
                    </div>

                    <div style={{flex: 1}}>
                        <img className="icon" style={{height: 80}} src={DjangoIcon} alt="Django"/>
                    </div>

                    <div style={{flex: 1}}>
                        <img className="icon" style={{height: 80}} src={SqlAlchemyIcon} alt="SQLAlchemy"/>
                    </div>
                </div>

                <h3>Database</h3>
                <div className="flex-container">
                    <div style={{flex: 1}}>
                        <img className="icon" style={{width: 65}} src={TSQLIcon} alt="Microsoft SQL"/>
                    </div>

                    <div style={{flex: 1}}>
                        <img className="icon" style={{width: 65}} src={PostgresIcon} alt="PostgreSQL"/>
                    </div>

                    <div style={{flex: 1}}>
                        <img className="icon" style={{width: 85}} src={SQLiteIcon} alt="SQLite"/>
                    </div>

                    <div style={{flex: 1}}>
                        <img className="icon" style={{width: 85}} src={MongoDBIcon} alt="MongoDB"/>
                    </div>

                    <div style={{flex: 1}}>
                        <img className="icon" style={{width: 85}} src={OPCIcon} alt="OPC DA/UA"/>
                    </div>

                    <div style={{flex: 1}}>
                    
                    <img className="icon" style={{width: 85}} src={PIIcon} alt="OSISoft PI"/>
                    </div>

                </div>

                <h3>Internet Of Things/Smart Devices (IOT)</h3>
                <div className="flex-container">
                
                    <div style={{flex: 1}}>
                    <img className="icon" style={{ width:85}} src={RaspberryPiIcon} alt="Arduino"/>
                    </div>

                    <div style={{flex: 1}}>
                        <img className="icon" style={{ width:85}} src={ArduinoIcon} alt="Arduino"/>
                    </div>

                </div>
                

                

            </div>
        );
    }
}

export default Skill;
