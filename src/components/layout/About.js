import React  from 'react';

export class About extends React.Component{
    render(){
        return (
            <div>
                <div className="flex-container">
                    <div style={{flex: 1}}>
                        <img className="profile-pic" src={process.env.PUBLIC_URL + 'ProfileImage.JPG'} alt="" />
                    </div>
                    <div style={{flex: 2}}>
                        <p>Generalist developer with industrial 
                            experience since 2017. I graduated with an
                            Assoicates of Science for Information Systems 
                            Technology: Computer Programming. 
                        </p>
                        <p> My experience as a software developer has been in multiple industries including tech, manufactoring and banking. 
                            While my core focus is .NET development I have experience in any languages and technologies. 
                            I set my focus on efficiency of both development and deployment and try to find bottlenecks in processes to find opportunities for improvement.
                            I do this without losing track of design or optimization based on customer needs.
                        </p>
                        <p> I excel at learning and implementing new technologies quickly 
                            and efficiently. No matter if its IOT, full-stack web development, 
                            or other types of communications and solutions; 
                            I strive to do the best job I can everytime.
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