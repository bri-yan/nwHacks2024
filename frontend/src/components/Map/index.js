import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1Ijoic3RldmVwb2xrYWRvdHMiLCJhIjoiY2xybWpmeXJ4MHludjJsb3htNjBreGRnZiJ9.pLBs2ec9YHbbTb8qXAA55w'
});

const MapComponent = (props) => {
  const leftMargin = props.sideBarVis ? '15vw' : '0';
  console.log(props.sideBarVis);

  return (
    <Map
      antialias={true}
      containerStyle={{
        height: '100vh',
        width: '100%',
        marginLeft: leftMargin,
        transition: '.5s'
      }}
      center={[-123.25995, 49.258605]}
      flyToOptions={{
        speed: 2
      }}
      onClick={props.mapClick}
      onStyleLoad={props.mapLoad}
      pitch = {[60]}
      style="mapbox://styles/mapbox/light-v10"
      zoom = {[14]}
    >
    </Map>
  );
}

export default MapComponent;