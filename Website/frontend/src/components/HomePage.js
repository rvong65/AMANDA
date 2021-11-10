import React, { Component } from "react";
import AboutUs from "./AboutUs";
import Message from "./Message";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import axios from "axios";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [{
                username: "Medical Assistant",
                content: <p>Hello</p>
            }],
            image: null,
        };

        this.handleImageUpload = this.handleImageUpload.bind(this);
    }

    componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    // Automatic scroll to bottom of chat
    scrollToBot() {
        document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight;
    }

    useMessageData() {
        fetch("/api/") // need to change to text model
            .then((response) => response.json())
            .then((data) => this.submitReport(data)); 
    }

    submitReport(messageContent) {
        this.setState({
            messages: this.state.messages.concat([{
                username: "Medical Assistant",
                content: <p>{messageContent}</p>,
            }])
        });
    }

    handleImageUpload = async (e) => {
        e.preventDefault();
        await this.setState({ image: e.target.files[0] });

        let formData = new FormData();
        formData.append('name', this.state.image.name);
        formData.append('image', this.state.image);

        await axios.post("/api/", formData, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
            .then(res => {
              console.log(res.data);
            })
            .catch(err => console.log(err));

        this.useMessageData();
      };

    render() {
        const username = "User";
        const { messages } = this.state;

        return (
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <div className="chatroom">
                            <h4>Medical Assistant</h4>
                            <ul className="messages" id="messages">
                                {messages.map((message) => <Message message={message} user={username} />)}
                            </ul>
                            <div className="input">
                                <input type="file" accept="image/png, image/jpeg" hidden id="image-upload" onChange={this.handleImageUpload} />
                                <button onClick={() => document.getElementById("image-upload").click()} id="image-upload-button">Upload</button>
                            </div>
                        </div>
                    </Route>
                    <Route path='/about' component={AboutUs} />
                </Switch>
            </Router>
        )
    }
}