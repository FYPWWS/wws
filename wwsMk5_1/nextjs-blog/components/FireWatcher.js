import React, { Component } from 'react'
import styles from '../styles/FireWatcher.module.css'
import GoogleMapReact from 'google-map-react'
import Head from 'next/head'


const mapCenter = { lat: 38.91131141655464, lng: -77.04375138092037 };


class FireWatcher extends Component{
  static defaultProps = {
    center: mapCenter,
    zoom: 16
  };
  render()
  {
    return(
      <div>
          <Head>
            <title>Firewatcher Page</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
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

export default FireWatcher;
