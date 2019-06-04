import React, { Component } from 'react';
import convert from 'convert-units';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/es';
import ForecastItem from './ForecastItem/index';
import './styles.css';

const api_key = "5050e931fb63ed263c67e1293bceeb49";
const url_base = "https://api.openweathermap.org/data/2.5/forecast";
export default class ForecastExtended extends Component {

    constructor(props) {
        super(props);
        this.state = { forecastData: null };
    }

    componentDidMount = () => {
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city) {
            this.setState({ forecastData: null });
            this.updateCity(this.props.city);
        }
    }

    getTemp = kelvin => {
        return convert(kelvin).from("K").to("C").toFixed(0);
    }

    updateCity = (city) => {
        const url_forecast = `${url_base}?q=${city}&appid=${api_key}`;
        fetch(url_forecast).then(data => { return data.json() }).then(data => {
            let result = data.list.filter(item => (
                moment.unix(item.dt).hour() === 7 ||
                moment.unix(item.dt).hour() === 13 ||
                moment.unix(item.dt).hour() === 19
            )).map(item => ({
                weekDay: moment.unix(item.dt).format('ddd'),
                hour: moment.unix(item.dt).hour(),
                data: {
                    temperature: this.getTemp(item.main.temp),
                    humidity: item.main.humidity,
                    wind: item.wind.speed,
                    weatherState: item.weather[0].main.toLowerCase(),
                }
            }));
            this.setState({ forecastData: result });
        });
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map(forecast => (
            <ForecastItem
                key={`${forecast.hour}-${forecast.weekDay}`}
                hour={forecast.hour}
                weekDay={forecast.weekDay}
                data={forecast.data} />
        ));
    }

    renderProgress = () => {
        return 'Cargardo pronostico extendido';
    }

    render() {
        return (
            <div>
                <h2 className='forecast-title'>Pronostico extendido {this.props.city} </h2>
                {this.state.forecastData ?
                    this.renderForecastItemDays(this.state.forecastData) :
                    this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
}
