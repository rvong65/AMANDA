import React, { Component } from "react";
import AboutUs from "./AboutUs";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { InputLabel, Input, Button, Grid, Typography, TextField, FormHelperText, FormControl, Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import axios from "axios";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_msg: "",
            upload_img: null
        };

        this.handleTextInput = this.handleTextInput.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSendMessagePressed = this.handleSendMessagePressed.bind(this);
        this.handleImageUpload = this.handleImageUpload.bind(this);
    }

    handleTextInput(e) {
        this.setState({
            user_msg: e.target.value
        });
    }

    handleImageChange(e) {
        console.log(e.target.files);
        this.setState({
            upload_img: e.target.files[0]
        });
    }

    handleSendMessagePressed(e) {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user_msg: this.state.user_msg,
            })
        };

        fetch('/api/', requestOptions)
            .then((response) => response.json())
            .then((data) => console.log(data));
    }

    handleImageUpload(e) {
        e.preventDefault();
        // console.log(this.state);
        let form_data = new FormData();
        form_data.append('upload_img', this.state.upload_img, this.state.upload_img.name);
        let url = 'http://127.0.0.1:8000/api/post/';
        axios.post(url, form_data, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
            .then(res => {
              console.log(res.data);
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Grid container spacing={1} align="center">
                            <Grid item xs={12} align="center">
                                <Typography component='h4' variant="h4">
                                    Stuff
                                </Typography>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <FormControl component="fieldset">
                                    <FormHelperText>
                                        <div align="center">
                                            More text
                                        </div>
                                    </FormHelperText>
                                    <RadioGroup row defaultValue="true">
                                        <FormControlLabel 
                                            value="true" 
                                            control={<Radio color="primary" />} 
                                            label="Thingies"
                                            labelPlacement="bottom"
                                        />
                                        <FormControlLabel 
                                            value="false" 
                                            control={<Radio color="secondary" />} 
                                            label="More thingies"
                                            labelPlacement="bottom"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <FormControl>
                                    <TextField required={false} onChange={this.handleInput} />
                                    <Button color="primary" variant="contained" onClick={this.handleSendMessagePressed}>
                                    Send
                                    </Button>
                                </FormControl>
                                <FormHelperText>
                                    <div align="center">
                                        Talk to bot
                                    </div>
                                </FormHelperText>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <form onSubmit={this.handleImageUpload}>
                                    <input type="file" accept="image/png, image/jpeg" required={false} id="upload_img" onChange={this.handleImageChange} />
                                    <input type="submit" /> 
                                </form>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <Button color="secondary" variant="contained" to="/about" component={Link}>
                                    About Us
                                </Button>
                            </Grid>
                        </Grid>
                    </Route>
                    <Route path='/about' component={AboutUs} />
                </Switch>
            </Router>
        )
    }
}