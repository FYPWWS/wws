import React, {Component} from 'react'
import styles from '../styles/FireWatcher.module.css'
import { GoogleMap, Marker, withGoogleMap } from '@react-google-maps/api';

class FireWatcher extends Component{
  render(){
    const GettingStartedGoogleMap = withGoogleMap(props => (
    <GoogleMap
    defaultZoom={3}
    defaultCenter={{lat: -25.363882, lng: 131.044922}}>

    </GoogleMap>
    ))
  
    return (
      <GettingStartedGoogleMap
        containerElement={
          <div style={{height: `100%`, width: `100%`}} />
        }

        mapElement={
          <div style={{height: `100%`, width: `100%`}} />
        }

      />
    )
  }
}
export default FireWatcher;
