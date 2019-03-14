import React, { Component } from 'react';
import ParticulesComponent from './../ParticulesComponent';
import './index.scss';

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
                    background: "#263238"
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
                    <div className="title text"> Hello, I'm <span className="highlight">Bruno Cerecetto</span>.<br></br>
                        I'm a full-stack web developer.</div>
                </div>
            </div>
        );
    }
}

export default HomeComponent;