import React from 'react'
import styles from '../styles/FireWatcher.module.css'
import { GoogleMap, Marker} from '@react-google-maps/api';


function FireWatcher() 
{
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Fire Watcher
        </h1>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </main>
    </div>
  )
}

export default FireWatcher;
