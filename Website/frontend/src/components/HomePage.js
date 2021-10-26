import React, { Component } from "react";
import AboutUs from "./AboutUs";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Button, Grid, Typography, TextField, FormHelperText, FormControl, Radio, RadioGroup, FormControlLabel } from "@material-ui/core";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_msg: "",
            // upload_img: null
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleImageInput = this.handleImageInput.bind(this);
        this.handleSendMessagePressed = this.handleSendMessagePressed.bind(this);
    }

    handleInput(e) {
        this.setState({
            user_msg: e.target.value,
        });
    }

    handleImageInput(e) {
        this.setState({

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

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Grid container spacing={1}>
                            <Grid item xs={12} align="center">
                                <Typography component='h4' variant="h4">
                                    More Stasdsacsuff
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
                                </FormControl>
                                <FormHelperText>
                                    <div align="center">
                                        Talk to bot
                                    </div>
                                </FormHelperText>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <Button color="primary" variant="contained" onClick={this.handleSendMessagePressed}>
                                    Send
                                </Button>
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