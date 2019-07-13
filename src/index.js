import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './scss/styles.scss';
import logo from './img/id.png';
import headShot from './img/head.jpg';
import BarChart from './chart.js';


{/* Navbar Component */ }

const NavBar = function() {
    return (
        <div className="row nav-bar">
            <div className="col-lg-9  col-md-6 nav align-self-center">
                    <img src={logo} alt="iddespignspace-logo" className="logo-nav img-responsive" />
                    <h2>idDesignSpace test</h2>
                </div>
                <div className="col-lg-3 col-md-6 nav-links align-self-center">
                    <a href="#main">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#work">Work</a>
                    <a href="#contact">Contact</a>
                </div>
        </div>
       
    );
};

{/* Main Component */ }

class Main extends React.Component {
    constructor(props) {
        super(props); 
    }
    render() {
        return (
            <div className="main container-fluid" id="main">
                <div className="row justify-content-center">
                    <img src={logo} className="logo" />
                </div>
                <div className="row justify-content-center">
                    <h1>Welcome to idDesignSpace</h1>
                </div>
                <div className="row justify-content-center">
                    <h2>Front End Developer and Designer</h2>
                </div>
             </div>
           
        );

    }
}

{/* About Component */ }

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="container-fluid about" id="about">
                <div className=" row justify-content-center">
                    <h2>About</h2>
                </div>
                <div className="row justify-content-sm-center about-sub-container">
                        <div className="col-lg-3 col-md-6 about-img-container">
                            <img src={headShot} alt="" className="img-responsive"/>
                        </div>
                        <div className="col-lg-9 col-md-6 about-txt-container align-self-center">
                            <p> My name is Ian Barkan, I am a 28 year software developer and designer. I have a knack for creative problem solving, making visually interesting User Interfaces and carefully crafting User Experiences. </p>
                        </div>
                    </div>
                </div>
        
        );
    }
}

{/* Skills Component */ }

class Skills extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="container-fluid skills" id="skills">
                <div className=" row justify-content-center">
                    <h2>Skills</h2>
                </div>
                <div className="row justify-content-center">
                    <BarChart/>
                </div>
            </div>

        );
    }
}

{/* Work Component */ }

class Work extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className=" work container-fluid" id="work">
                <h2 className="text-center">Work</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <h3 className="text-center">Delaware Valley Veterans Consortium</h3>
                        {/* <img src={} alt=""> */}
                        <p></p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <h3 className="text-center">Arcade Game Clone</h3>
                        {/* <img src={} alt=""> */}
                        <p></p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <h3 className="text-center">Restaurant Website</h3>
                        {/* <img src={} alt=""> */}
                        <p></p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <h3 className="text-center"></h3>
                        {/* <img src={} alt=""> */}
                        <p></p>
                    </div>
                </div>
            </div>
        );
    }
}

{/* Contact Component */ }

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="contact container-fluid" id="contact">
                <div className="row contact-container">
                    <div className="col-lg-12">
                        <h2 className="text-center">Contact</h2>
                    </div>
                    <div className="row form-container">
                        <div className="col-lg-12">
                        <form>
                            <div className="contact-container justify-content-center col-lg-12 col-md-12 col-sm-12">
                                <label className="text-center" for="fname">First Name</label>
                            </div>
                            <div className="contact-container col-lg-12 col-md-12 col-sm-12">
                                    <input type="text" id="fname" name="firstname" placeholder="name.."/>
                            </div>
            
                            <div className="contact-container col-lg-12 col-md-12 col-sm-12">
                                <label for="lname">Last Name</label>
                            </div>

                            <div className="contact-container col-lg-12 col-md-12 col-sm-12">
                                <input type="text" id="lname" name="lastname" placeholder="name.."/>
                            </div>

                            <div className="contact-container col-lg-12 col-md-12 col-sm-12">
                                <label for="email">Email</label>
                            </div>

                            <div className="contact-container col-lg-12 col-md-12 col-sm-12">
                                <input type="email" id="" name="email" placeholder="email.."/>
                            </div>
                            
                    
                            <div className="contact-container col-lg-12 col-md-12 col-sm-12">
                                <label for="pnumber">Phone Number</label>
                            </div>
                            <div className="contact-container col-lg-12 col-md-12 col-sm-12">
                                <input type="number" id="pnumber" name="phonenumber" placeholder="phone number.."/>
                            </div>
                            
                            

                            <div className="contact-container col-lg-12 col-md-12 col-sm-12">
                                <label className="text-center" for="message">Message</label>
                            </div>
                            <div className="contact-container col-lg-12 col-md-12 col-sm-12">
                            
                            </div>

                    
                        
                            <div className="contact-container col-lg-12 col-md-12 col-sm-12">
                                <input type="submit" value="submit" id="contact-submit"/>
                            </div>

                        </form>
                        </div>
                    </div>                 
                </div>               
            </div>
        );
    }
}

{/* Footer Component */ }

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container-fluid" id="footer">
                <div className="row footer justify-content-center">
                    <a href=""><i className="fab fa-github align-self-center"></i></a>
                    <a href=""><i className="fab fa-linkedin align-self-center"></i></a>
                    <a href=""><i className="fab fa-codepen align-self-center"></i></a>
                </div>
            </div>
            
        );
    }
}

{/* MyPage Component */ }

class MyPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container-fluid my-page">
                <NavBar /> 
                <Main />
                <About />
                <Skills />
                <Work />
                <Contact />
                <Footer />
            </div>
        );
    }
};




ReactDOM.render(<MyPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
