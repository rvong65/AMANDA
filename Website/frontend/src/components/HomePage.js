import React, { Component } from "react";
import ReactDOM from "react-dom";
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
            }]
        };

        this.submitMessage = this.submitMessage.bind(this);
        // this.handleTextInput = this.handleTextInput.bind(this);
        // this.handleImageChange = this.handleImageChange.bind(this);
        // this.handleSendMessagePressed = this.handleSendMessagePressed.bind(this);
        // this.handleImageUpload = this.handleImageUpload.bind(this);
    }

    submitMessage(e) {
        e.preventDefault();

        this.setState({
            messages: this.state.messages.concat([{
                username: "User",
                content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        });
    }

    componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.messages).scrollTop = ReactDOM.findDOMNode(this.refs.messages).scrollHeight;
    }

    // handleImageChange(e) {
    //     this.setState({
    //         upload_img: e.target.files[0]
    //     });
    // }

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

    // handleImageUpload(e) {
    //     e.preventDefault();
    //     console.log(this.state);
    //     let form_data = new FormData();
    //     form_data.append('upload_img', this.state.upload_img, this.state.upload_img.name);
    //     let url = 'http://127.0.0.1:8000/api/post/';
    //     axios.post(url, form_data, {
    //       headers: {
    //         'content-type': 'multipart/form-data'
    //       }
    //     })
    //         .then(res => {
    //           console.log(res.data);
    //         })
    //         .catch(err => console.log(err))
    // }

    render() {
        const username = "User";
        const { messages } = this.state;

        return (
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <div className="chatroom">
                            <h4>Medical Assistant</h4>
                            <ul className="messages" ref="messages">
                                {messages.map((message) => <Message message={message} user={username} />)}
                            </ul>
                            <form className="input" onSubmit={this.submitMessage}>
                                <input id="userinput" type="text" ref="msg" />
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </Route>
                    <Route path='/about' component={AboutUs} />
                </Switch>
            </Router>
        )
    }
}