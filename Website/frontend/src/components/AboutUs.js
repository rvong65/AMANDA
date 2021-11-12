import React, { Component } from "react";
import Navbar from "./Navbar";

export default class AboutUs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Navbar />
                <div className="about-section">
                    <h1>About Us Page</h1>
                    <p>INTRODUCING TEAM XMEN</p>
                </div>

                {/* <! -- Farzaan Wadiwalla -->
                <! -- Insert person image: img src = ..jpg link.. --> */}

                <h2>Our Team</h2>
                <div className="row">
                    <div className="column">
                        <div className="card">
                            <img className="profile-picture" src="/w3images/team1.jpg" alt="Farzaan" />
                            <div className="container">
                                <h2>Farzaan Wadiwalla</h2>
                                <p className="title">Data Analyst</p>
                                <p>Add some text description</p>
                                <p>farzaanw@gmail.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>

                    {/* <! -- Daniel Gao -->
                    <! -- Insert person image: img src = ..jpg link.. --> */}

                    <div className="column">
                        <div className="card">
                            <img className="profile-picture" src="/w3images/team2.jpg" alt="Daniel" />
                            <div className="container">
                                <h2>Daniel Gao</h2>
                                <p className="title">Product Manager</p>
                                <p>Add some text description</p>
                                <p>dgao22@siprep.org</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                
                    {/* <! -- Ryan Vong -->
                    <! -- Insert person image: img src = ..jpg link.. --> */}

                    <div className="column">
                        <div className="card">
                            <img className="profile-picture" src="/w3images/team3.jpg" alt="Ryan" />
                            <div className="container">
                                <h2>Ryan Vong</h2>
                                <p className="title">Software Engineer</p>
                                <p>Add some text description</p>
                                <p>ryanvong8@gmail.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">

                    {/* <! -- Jasper Shen -->
                    <! -- Insert person image: img src = ..jpg link.. --> */}

                    <div className="column">
                        <div className="card">
                            <img className="profile-picture" src="/w3images/team3.jpg" alt="Jasper" />
                            <div className="container">
                                <h2>Jasper Shen</h2>
                                <p className="title">Product Designer</p>
                                <p>Add some text description</p>
                                <p>jaspershen21@gmail.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>

                    {/* <! -- Nick Goodchild -->
                    <! -- Insert person image: img src = ..jpg link.. --> */}

                    <div className="column">
                        <div className="card">
                            <img className="profile-picture" src="/w3images/team3.jpg" alt="Nick" />
                                <div className="container">
                                <h2>Nick Goodchild</h2>
                                <p className="title">Software Engineer</p>
                                <p>Add some text description</p>
                                <p>nickgoodchild654@gmail.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}