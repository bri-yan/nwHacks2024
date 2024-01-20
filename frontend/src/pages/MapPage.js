import React, { useState, useEffect } from 'react';
import Map from '../components/Map';

function MapPage() {
  return (
    <div className="map">
      <Map sideBarVis={false} mapClick={() => {}} mapLoad={() => {}} />
    </div>
  );
}

export default MapPage;
