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
                <div class="about-section">
                    <h1>About Us Page</h1>
                    <p>INTRODUCING TEAM XMEN</p>
                </div>
{/* 
                <! -- Farzaan Wadiwalla -->
                <! -- Insert person image: img src = ..jpg link.. --> */}

                <h2 style="text-align:center">Our Team</h2>
                <div class="row">
                    <div class="column">
                        <div class="card">
                            <img src="/w3images/team1.jpg" alt="Farzaan" style="width:100%" />
                            <div class="container">
                                <h2>Farzaan Wadiwalla</h2>
                                <p class="title">Data Analyst</p>
                                <br /><br />Add some text description
                                <br /><br />farzaanw@gmail.com
                                <br /><br /><button class="button">Contact</button>
                            </div>
                        </div>
                    </div>
{/* 
                <! -- Daniel Gao -->
                <! -- Insert person image: img src = ..jpg link.. --> */}

                    <div class="column">
                        <div class="card">
                            <img src ="https://cdn.discordapp.com/attachments/885725394110644224/909133221889982524/profile_photo.png" alt="Daniel" style="width:100%" />
                            <div class="container">
                                <h2>Daniel Gao</h2>
                                <p class="title">Product Manager</p>
                                <br /><br />I’m a high school student from San Francisco interested in CS and Math. I hope to explore the applications of AI and use them to solve problems in the world.
                                <br /><br />dgao22@siprep.org
                                <br /><br /><button class="button">Contact</button>
                            </div>
                        </div>
                    </div>
                
  
                {/* <! -- Ryan Vong -->
                <! -- Insert person image: img src = ..jpg link.. --> */}

                    <div class="column">
                        <div class="card">
                            <img src="/w3images/team3.jpg" alt="Ryan" style="width:100%" />
                            <div class="container">
                                <h2>Ryan Vong</h2>
                                <p class="title">Software Engineer</p>
                                <br /><br />Add some text description
                                <br /><br />ryanvong8@gmail.com
                                <br /><br /><button class="button">Contact</button>
                            </div>
                        </div>
                    </div>
           

                {/* <! -- Jasper Shen -->
                <! -- Insert person image: img src = ..jpg link.. --> */}

                    <div class="column">
                        <div class="card">
                            <img src="/w3images/team3.jpg" alt="Jasper" style="width:100%" />
                            <div class="container">
                                <h2>Jasper Shen</h2>
                                <p class="title">Web Designer</p>
                                <br /><br />Add some text description
                                <br /><br />jaspershen21@gmail.com
                                <br /><br /><button class="button">Contact</button>
                            </div>
                        </div>
                    </div>

                {/* <! -- Nick Goodchild -->
                <! -- Insert person image: img src = ..jpg link.. --> */}

                    <div class="column">
                        <div class="card">
                            <img src="/w3images/team3.jpg" alt="Nick" style="width:100%" />
                            <div class="container">
                                <h2>Nick Goodchild</h2>
                                <p class="title">Software Engineer</p>
                                <br /><br />Add some text description
                                <br /><br />nickgoodchild654@gmail.com
                                <br /><br /><button class="button">Contact</button>
                            </div>
                        </div>
                    </div>

                {/* <! -- Cameron Jackson -->
                <! -- Insert person image: img src = ..jpg link.. --> */}

                    <div class="column">
                        <div class="card">
                            <img src="/w3images/team2.jpg" alt="Cameron" style="width:100%" />
                            <div class="container">
                                <h2>Cameron Jackson</h2>
                                <p class="title">Mentor</p>
                                <br /><br />Add some text description
                                <br /><br /><button class="button">Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
        )};
}