import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import HomeNav from './VetNav';
import VetHeader from './VetHeader';
import VetBody from './VetBody';

class Vet extends Component {

    render() {
        return (
            <div className="mainDiv">
                <VetHeader/>
                
                <HomeNav/>

                <div className="headerDiv">
                
                </div>
                
                <VetBody/>
            </div >
        );
    }
}

export default Vet;