import React, { Component } from 'react';
import ParticulesComponent from './../ParticulesComponent';

class HomeComponent extends Component {
    render() {
        return (
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "#b61924"
                }}>
                <ParticulesComponent />
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }}
                >
                    <div class="text"> Hello, I'm <span class="highlight">Bruno Cerecetto</span>.<br></br>
                        I'm a full-stack web developer.</div>
                </div>
            </div>
        );
    }
}

export default HomeComponent;