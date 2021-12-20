import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import { formatRelative } from "date-fns";

import classes from "./FireWatcher.module.css";

const libraries = ["places"];

function FireWatcherPage() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return (
    (<h1>Fire Watcher</h1>),
    (
      <GoogleMap
        mapContainerClassName={classes.gmaps}
        zoom={10}
        center={classes.center}
      ></GoogleMap>
    )
  );
}

export default FireWatcherPage;
