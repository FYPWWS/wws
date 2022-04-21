import React, { Component } from 'react'
import styles from '../styles/FireWatcher.module.css'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const mapCenter = { lat: 43.300189, lng: 5.865928 };

const markers = [
  
];


class FireWatcher extends Component {
  static defaultProps = {
    center: mapCenter,
    zoom: 14
  };

  render() {
    return (
      <div className={styles.map}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDGqF0zckys922q53176tG4gY3AM413j4w' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          hoverDistance={10}
          margin={[50, 50, 50, 50]}

        >
        <AnyReactComponent
          lat={11.0168}
          lng={76.9558}
          text="My Marker"
        />
        </GoogleMapReact>
      </div>
    );
  }
}

export default FireWatcher