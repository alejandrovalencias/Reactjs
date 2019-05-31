import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForcastExtended';
import './App.css';

const cities = [
    'Medellín,co',
    'Cartagena,co',
    'Bogota,co',];

class App extends Component {

    constructor() {
        super();
        this.state = {
            city: ''
        };
    }

    handleSelectionLocation = () => {
        console.log("handleSelectionLocation");
    }

    render() {
        return (
            <Grid>
                <Row>
                    <AppBar position='sticky'>
                        <Toolbar>
                            <Typography variant='title' color='inherit'>
                                Weather App
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <LocationList cities={cities} onSeletedLocation={this.handleSelectionLocation} />
                    </Col>
                    <Col xs={12} md={6}>
                        <Paper elevation={4}>
                            <div className="details">
                                <ForecastExtended city={this.state.city} />
                            </div>
                        </Paper>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

/*function App() {
    return (
        <div className="App" >
            <WeatherLocation />
        </div>
    );
}*/

export default App;