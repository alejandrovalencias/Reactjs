import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ForecastExtended extends Component {
    render() {
        const { city } = this.props;
        return (
            <div>
                {city}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
}
