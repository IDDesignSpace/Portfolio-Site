import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './scss/styles.scss';
import logo from './img/id.png';

{/* Navbar Component */ }

const NavBar = function() {
    return (
        <div className="row nav-bar">
        <div class="container-fluid">
                <div className="col-lg-9  col-md-6 nav">
                    <img src={logo} alt="iddespignspace-logo" className="logo-nav img-responsive" />
                    <h2>idDesignSpace</h2>
                </div>
                <div className="col-lg-3 col-md-6 nav-links">
                    <a>Home</a>
                    <a>About</a>
                    <a>Skills</a>
                    <a>Work</a>
                    <a>Contact</a>
                </div>
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
            <div className=" main">
            
                <img src={logo} className="logo"/>
                <h1>Welcome to idDesignSpace</h1>
                <p>Hello,<br /> My name is Ian Barkan and this is idDesignSpace. This is a place to showcase my skills as a Front end web developer.</p>
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
        return(
            <div>
                <h2>About</h2>
                <img src=""/>
                <p>I love to build and learn new things. I love being challenged.  </p>

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
            <div>
                <h2>Skills</h2>
                <div className="graph">
                
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
            <div>
                <h2>Work</h2>
                <div className="work"></div>
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
            <div className="contact">
                <h2>Contact</h2>
            </div>
        );
    }
}

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

class MyPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="my-page container-fluid">
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
