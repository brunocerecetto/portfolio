import React, { Component } from 'react';
import ParticulesComponent from './../ParticulesComponent';
import TextLoop from 'react-text-loop';
import './index.scss';

class HomeComponent extends Component {
    render() {
        const width = window.window.innerWidth;
        const height = window.window.innerHeight;
        
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
                <ParticulesComponent height={height} width={width}/>
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }}
                >
                    <div className="title text"> 
                        <TextLoop children={["Hello , I'm", "Hola, Soy ", "Oi, Sou ", "你好，我是"]} />
                        <span className="highlight"> Bruno Cerecetto</span>.<br></br>
                        <TextLoop children={["I'm a full-stack web developer.", "Soy desarrollador web Full Stack.", "Eu sou um full-stack web developer.", "我是一個全棧Web開發人員"]} />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeComponent;