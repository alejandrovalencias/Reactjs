import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { SUN, WINDY } from './../../constants/weathers';

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 35,
    wind: "10 m/s"
};

const data2 = {
    temperature: 20,
    weatherState: WINDY,
    humidity: 60,
    wind: "18 m/s"
};

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Medellin - Colombia',
            data
        };
    }

    handleUpdateClick = () => {
        this.setState({ data: data2 });
    }

    render() {
        return (
            <div className="weatherLocationCont" >
                <Location city={this.state.city} />
                <WeatherData data={this.state.data} />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

/*const WeatherLocation = () => (
    <div className="weatherLocationCont" >
        <Location city={"Medellín - Colombia"} />
        <WeatherData data={data} />
    </div>
);*/

export default WeatherLocation;