import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './scss/styles.scss';
import turtle from "./img/turtle.jpg";

const NavBar = function() {
    return (
        <div className=""> 
            <div className="">
                <h2>idDesignSpace</h2>
            </div>
            <div className="">
                <a>Home</a>
                <a>About</a>
                <a>Contact</a>
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
            <div className="container-fluid"> <img src={turtle} className="img-responsive"/></div>
           
        );

    }
}

class MyPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <NavBar />  
                <Main />      
            </div>
        );
    }
};




ReactDOM.render(<MyPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
