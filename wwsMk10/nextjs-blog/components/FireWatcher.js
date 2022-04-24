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
      <div className={styles.map}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDGqF0zckys922q53176tG4gY3AM413j4w' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          hoverDistance={10}
          margin={[50, 50, 50, 50]}

        >
        
        </GoogleMapReact>
      </div>
    );
  }
}

export default FireWatcher