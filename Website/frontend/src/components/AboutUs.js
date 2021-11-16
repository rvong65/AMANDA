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

                <h2 class="our-team">Our Team</h2>
                <div class="row">
                    {/* <! -- Farzaan Wadiwalla --> */}
                    <div class="column">
                        <div class="card">
                            <img class="profile-picture" src="https://media.discordapp.net/attachments/893914165884882994/909167195249057873/IMG_9805.PNG?width=334&height=593" alt="Farzaan" />
                            <div class="container">
                                <h2>Farzaan Wadiwalla</h2>
                                <p class="title">Data Analyst</p>
                                <br />Farzaan is a junior at Lincoln Highschool in Portland, Oregon. He is fascinated by the world of artificial intelligence and hopes to further his knowledge in AI-technology to solve real-world problems.
                                <br /><br />farzaanw@gmail.com
                                <br /><br /><button class="button">Contact</button>
                            </div> 
                        </div>
                    </div>

                    {/* <! -- Daniel Gao --> */}
                    <div class="column">
                        <div class="card">
                            <img class="profile-picture" src="https://cdn.discordapp.com/attachments/885725394110644224/909133221889982524/profile_photo.png" alt="Daniel" />
                            <div class="container">
                                <h2>Daniel Gao</h2>
                                <p class="title">Product Manager</p>
                                <br />Daniel is a high school student from San Francisco who is interested in CS and Math. He hopes to explore the applications of AI and use them to solve problems in the world.
                                <br /><br />dgao22@siprep.org
                                <br /><br /><button class="button">Contact</button>
                            </div>
                        </div>
                    </div>

                    {/* <! -- Jasper Shen --> */}
                    <div class="column">
                        <div class="card">
                            <img class="profile-picture" src="https://media.discordapp.net/attachments/715017264361111563/867076500368785478/unknown.png?width=728&height=713" alt="Jasper" />
                            <div class="container">
                                <h2>Jasper Shen</h2>
                                <p class="title">Product Designer</p>
                                <br />I am a high school student in Colorado that programs for fun. I hope to be able to connect artificial intelligence and neuroscience in some way.
                                <br /><br />jaspershen21@gmail.com
                                <br /><br /><button class="button">Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    {/* <! -- Ryan Vong --> */}
                    <div class="column">
                        <div class="card">
                            <img class="profile-picture" src="https://cdn.discordapp.com/attachments/886044529881403462/910008541169995796/Screenshot_2021-11-15_192817.png" alt="Ryan" />
                            <div class="container">
                                <h2>Ryan Vong</h2>
                                <p class="title">Software Engineer</p>
                                <br />Ryan is a high school senior who resides in Los Angeles, California. In his free time, he usually reads sci-fi books and overall he has a spontaneous personality who likes trying new things.
                                <br /><br />ryanvong8@gmail.com
                                <br /><br /><button class="button">Contact</button>
                            </div>
                        </div>
                    </div>

                    {/* <! -- Nick Goodchild --> */}
                    <div class="column">
                        <div class="card">
                            <img class="profile-picture" src="https://cdn.discordapp.com/attachments/886044587712450630/909174573071761438/default-profile-icon-24.png" alt="Nick" />
                            <div class="container">
                                <h2>Nick Goodchild</h2>
                                <p class="title">Software Engineer</p>
                                <br />Nick is a high school senior from a town in the middle of nowhere; Ashburnham, Massachusetts. He loves all things STEM, and is planning on pursuing a degree in Robotics Engineering and/or Math Education.
                                <br /><br />nickgoodchild654@gmail.com
                                <br /><br /><button class="button">Contact</button>
                            </div>
                        </div>
                    </div>

                    {/* <! -- Cameron Jackson --> */}
                    <div class="column">
                        <div class="card">
                            <img class="profile-picture" src="https://media.discordapp.net/attachments/885725394110644224/909154845120946186/Screen_Shot_2021-11-13_at_10.56.41_AM.png" alt="Cameron" />
                            <div class="container">
                                <h2>Cameron Jackson</h2>
                                <p class="title">Our Mentor</p>
                                <br />Cameron Jackson attends the University of Texas at Dallas as a Software Engineering major. Cameron enjoys knitting, playing chess and learning about cutting edge AI in his free time. He is deeply interested in way too many different fields of AI and sharing this passion with everyone within earshot.
                                <br /><br /><button class="button">Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
