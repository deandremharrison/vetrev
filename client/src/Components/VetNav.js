import React, { Component } from 'react';

class HomeNav extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "gray"}}>
                    <div class="d-flex justify-content-center navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/vet/new">New Vet</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default HomeNav;