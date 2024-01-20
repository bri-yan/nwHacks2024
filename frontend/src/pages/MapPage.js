import React, { useState, useEffect } from 'react';
import MapComponent from '../components/Map';

function MapPage() {
  return (
    <div className="map">
      <MapComponent sideBarVis={true} mapClick={() => {}} mapLoad={() => {}} />
    </div>
  );
}

export default MapPage;
