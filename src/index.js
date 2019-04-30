import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
            </div>
        );
    }
};




ReactDOM.render(<MyPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
