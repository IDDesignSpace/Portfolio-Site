import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './scss/styles.scss';
import logo from './img/id.png'

const NavBar = function() {
    return (
        <div class="container-fluid">
            <div className="row nav-bar">
                <div className="col-lg-9  col-md-6 nav">
                    <img src={logo} className="logo-nav img-responsive" />
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

class Main extends React.Component {
    constructor(props) {
        super(props); 
    }
    render() {
        return (
            <div className=" main">
            
                <img src={logo} className="logo"/>
                <h1>Welcome to idDesignSpace</h1>
             </div>
           
        );

    }
}

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <h2>About</h2>
                <img src=""/>
                <p></p>

            </div>
        );
    }
}

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

class Footer extend React.Component {
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
