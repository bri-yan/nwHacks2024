import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1Ijoic3RldmVwb2xrYWRvdHMiLCJhIjoiY2xybWpmeXJ4MHludjJsb3htNjBreGRnZiJ9.pLBs2ec9YHbbTb8qXAA55w',
});


const MapComponent = (props) => {
  const leftMargin = props.sideBarVis ? '15vw' : '0vw';
  return (
    <Map
      antialias={true}
      containerStyle={{
        height: '100vh',
        width: '100%',
        marginLeft: leftMargin,
        marginBottom: props.updateMap,
        transition: '0.5s ease-in-out',
      }}
      center={props.coords}
      flyToOptions={{
        speed: 2,
      }}
      onClick={props.mapClick}
      onStyleLoad={props.mapLoad}
      pitch={[60]}
      style="mapbox://styles/mapbox/light-v11"
      zoom={[14]}
    />
  );
};

export default MapComponent;
