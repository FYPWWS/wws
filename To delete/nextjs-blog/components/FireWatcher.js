import React, { Component } from 'react'
import styles from '../styles/FireWatcher.module.css'
import GoogleMapReact from 'google-map-react';


const mapCenter = { lat: 43.300189, lng: 5.865928 };


class FireWatcher extends Component {
  static defaultProps = {
    center: mapCenter,
    zoom: 14
  };

  render() {
    return (
      <div>
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDGqF0zckys922q53176tG4gY3AM413j4w' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            hoverDistance={10}
          >
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default FireWatcher