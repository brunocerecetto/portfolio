import React, { Component } from 'react';
import HomeComponent from './components/Home';
import './App.scss';


class App extends Component {

    render() {
        return (
            <div className="App">
                <HomeComponent/>
            </div>
        );
    }
}
        
export default App;
