import React, { Component, useState } from "react";
import AboutUs from "./AboutUs";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Input, Button, Grid, Typography, TextField, FormHelperText, FormControl } from "@material-ui/core";
import axios from "axios";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_msg: "",
            upload_img: null,
            inputs: [""]
        };

        this.handleTextInput = this.handleTextInput.bind(this);
        this.appendInput = this.appendInput.bind(this);
        // this.handleImageChange = this.handleImageChange.bind(this);
        // this.handleSendMessagePressed = this.handleSendMessagePressed.bind(this);
        // this.handleImageUpload = this.handleImageUpload.bind(this);
    }

    handleTextInput(e) {
        this.setState({
            user_msg: e.target.value
        });
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

    appendInput(e) {
        e.preventDefault();
        this.setState(prevState => ({
            inputs: [...prevState.inputs, this.state.user_msg]
        }));
        console.log(this.state);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <div>
                            <form>
                                <div id="msgArea">
                                    {this.state.inputs.map(input => <p>{input}</p>)}
                                </div>
                                <input placeholder="Input user msg" onChange={this.handleTextInput} />
                                <button onClick={this.appendInput}>Send</button>
                            </form>
                        </div>


                        {/* <Grid container spacing={2}>
                            <Grid item xs={12} align="center">
                                <Typography component='h4' variant="h4">
                                    Title
                                </Typography>
                            </Grid>
                            <Grid item xs={12} align="center">

                            </Grid>
                            <Grid item xs={12} align="center">
                                <FormControl>
                                    <TextField required={false} onChange={this.handleTextInput} />
                                    <Button color="primary" variant="contained" onClick={this.handleSendMessagePressed}>Send</Button>
                                </FormControl>

                            </Grid>
                            <Grid item xs={12} align="center">
                                <form onSubmit={this.handleImageUpload}>
                                    <Input type="file" accpt="image/png, image/jpeg" required={false} id="upload_img" onChange={this.handleImageChange} />
                                    <Button type="submit" color="primary" variant="contained">Submit</Button>
                                </form>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <Button color="secondary" variant="contained" to="/about" component={Link}>
                                    About Us
                                </Button>
                            </Grid>
                        </Grid> */}
                    </Route>
                    <Route path='/about' component={AboutUs} />
                </Switch>
            </Router>
        )
    }
}