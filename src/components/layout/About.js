import React  from 'react';

export class About extends React.Component{
    render(){
        return (
            <div>
                <div className="flex-container">
                    <div style={{flex: 1}}>
                        <img alt="Profile Picture" className="profile-pic" src={process.env.PUBLIC_URL + 'ProfileImage.JPG'} />
                    </div>
                    <div style={{flex: 2}}>
                        <p>Generalist developer with industrial 
                            experience since 2017. I graduated with an
                            Assoicates of Science for Information Systems 
                            Technology: Computer Programming which has recently been renamed Computer Engineering. 
                        </p>
                        <p> My industrial experience is IT Administrator / Software Developer. I held the only 
                            software developer postion at a paper mill, where my main focus was to create ways to 
                            both keep network, devices, and process reliable and efficient.
                        </p>
                        <p> I excel at learning and implementing new technologies quickly 
                            and efficiently. No matter if its IOT, full-stack web development, or some type 
                            of API to other softwares, I strive to do the best job I can everytime.
                        </p>
                    </div>
                </div>
                <div>
                    <h3>Check out my resume</h3>
                    <a href="https://www.dropbox.com/s/pkxiaxq68wzi7hn/JasonHodgesResume.pdf?dl=0">
                    <i class="fas fa-file-pdf fa-2x"></i>
                    </a>
                </div>
            </div>);
    }

}

export default About;