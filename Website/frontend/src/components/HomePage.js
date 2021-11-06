import React, { Component } from "react";
import AboutUs from "./AboutUs";
import Message from "./Message";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Input, Button, Grid, Typography, TextField, FormHelperText, FormControl } from "@material-ui/core";
import axios from "axios";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [{
                username: "Medical Assistant",
                content: <p>Hello</p>
            }],
            image: null
        };

        this.submitMessage = this.submitMessage.bind(this);
        this.imageChange = this.imageChange.bind(this);
        this.printState = this.printState.bind(this);
        // this.handleTextInput = this.handleTextInput.bind(this);
        // this.handleSendMessagePressed = this.handleSendMessagePressed.bind(this);
        this.handleImageUpload = this.handleImageUpload.bind(this);
    }

    submitMessage(e) {
        e.preventDefault();
        
        if (document.getElementById("user-input").value != "") {
            this.setState({
                messages: this.state.messages.concat([{
                    username: "User",
                    content: <p>{document.getElementById("user-input").value}</p>,
                }])
            }, () => {
                document.getElementById("user-input").value = "";
            });
        }
    }

    componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight;
    }

    imageChange(e) {
    }

    printState() {
        console.log(this.state);
    }

    // handleSendMessagePressed(e) {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({
    //             user_msg: this.state.user_msg,
    //         })
    //     };

    //     fetch('/api/text', requestOptions)
    //         .then((response) => response.json())
    //         .then((data) => console.log(data));
    // }

    handleImageUpload = async (e) => {
        e.preventDefault();
        await this.setState({ image: e.target.files[0] });

        console.log(this.state);
        let form_data = new FormData();
        form_data.append('image', this.state.image, this.state.image.name);
        let url = '/api/post/';
        axios.post(url, form_data, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
            .then(res => {
              console.log(res.data);
            })
            .catch(err => console.log(err))
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
                            <form className="input" onSubmit={this.submitMessage}>
                                <input id="user-input" type="text" ref="msg" />
                                <button type="submit">Send</button>
                                <input type="file" accept="image/png, image/jpeg" hidden id="image-upload" onChange={this.handleImageUpload} />
                                <button onClick={() => document.getElementById("image-upload").click()} id="image-upload-button">Upload</button>
                            </form>
                        </div>
                        <button onClick={this.printState}>State</button>
                    </Route>
                    <Route path='/about' component={AboutUs} />
                </Switch>
            </Router>
        )
    }
}