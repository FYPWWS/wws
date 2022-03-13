import Head from 'next/head'
import Intro from '../components/Intro'
import React,{ Component } from "react"
import GoogleMapReact from 'google-map-react'

const mapCenter = { lat: 38.91131141655464, lng: -77.04375138092037 };

class Home extends Component{
  static defaultProps = {
    center: mapCenter,
    zoom: 16
  };

  render(){
    return(
        <div>
            <Head>
                <title>WWS | Home page</title>
                <meta name="keyword" content="WWS"/>
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

export default Home
