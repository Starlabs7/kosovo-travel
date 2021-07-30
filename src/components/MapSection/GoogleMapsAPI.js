import React from 'react'
import { withScriptjs , withGoogleMap , GoogleMap , Marker} from "react-google-maps";
  
  const MapWrapper = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat:42.63440959654229, lng:20.89072528259319 }}
    >
      <Marker
        position={{ lat:42.650569168141786, lng:21.1600319087199 }}
      />
    </GoogleMap>
  ));
  
  export default function GoogleMapsAPI(){
      return(
        <div>
          <h1 className="second">Find Kosovo on the map</h1>
          <div style={{marginTop:'1vw', marginBottom:'5vw'}}>
              <MapWrapper
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBGcQ6PgiTRhX36keoxS4brElVcuDUt2xU&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `400px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
              />
          </div>   
        </div>    
      )
  }
  
