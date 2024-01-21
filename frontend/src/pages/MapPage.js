import React, { useState, useEffect } from 'react';
import MapComponent from '../components/Map';
import SidebarComponent from '../components/Sidebar';
import { loadLocations } from '../actions/MapActions';

const MapPage = (props) => {
  const mockFarms = {
    'UBC Farm Market': {long: -123.23799, lat: 49.25105, address: '1234 Main St.'},
    'Pacific Spirit Farm' : {long: -123.176588, lat: 49.224863, address: '2345 Main St.'},
  }
  let locations = mockFarms;
  const [sideBarVis, setSideBar] = useState(true);
  const [coords, setCoords] = useState([-123.23799, 49.25105]);

  const mapLoad = map => {
    setTimeout(() => {
      window.map = map;
      loadLocations(map, locations);
    }, 2000);
  };

  const toggleSideBar = (sideBarState) => {
    setSideBar(sideBarState);
  }

  const toggleCoords = (coordinates) => {
    setCoords(coordinates);
  }

  const mockData = [
    { type: 'donation-shelter'},
    { type: 'food-bank'},
    { type: 'mobile-pantry'},
    { type: 'homeless-shelter'},
  ];
  
  const mockRanking = [
    ['UBC Farm Market', 'donation-shelter', '1234 Main St.'],
    ['Pacific Spirit Farm', 'food-bank', '2345 Main St.'],
  ]
  
  // const mockFarms = {
  //   'UBC Farm Market': {long: -123.23595, lat: 49.249605, address: '1234 Main St.'},
  //   'Pacific Spirit Farm' : {long: -123.2095, lat: 49.245605, address: '2345 Main St.'},
  // }

  const mockRanking2 = ['donation-shelter'];
  return (
    <div className="mapbox">
      <MapComponent coords={coords} mapLoad={mapLoad} sideBarVis={sideBarVis} mapClick={() => {}} />
      <SidebarComponent toggleCoords={toggleCoords} shelters={mockFarms} ranking={mockRanking} toggleSideBar={toggleSideBar} sideBarVis={sideBarVis}/>
      
    </div>
  );
}

export default MapPage;
