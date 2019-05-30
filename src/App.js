import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
    'Medellín,co',
    'Cartagena,co',
    'Bogota,co',];

class App extends Component {

    handleSelectionLocation = () => {
        console.log("handleSelectionLocation");
    }
    
    render() {
        return (
            <div className="App" >
                <LocationList
                    cities={cities}
                    onSeletedLocation={this.handleSelectionLocation} />
            </div>
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