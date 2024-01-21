import React, { useState, useEffect } from 'react';
import MapComponent from '../components/Map';
import SidebarComponent from '../components/Sidebar';
import { loadLocations } from '../actions/MapActions';
import { closestFarms } from '../components/ClosestFarmList';

const MapPage = (props) => {
  const mockFarms = {
    'UBC Farm Market': {long: -123.23595, lat: 49.249605, address: '1234 Main St.'},
    'Pacific Spirit Farm' : {long: -123.2095, lat: 49.245605, address: '2345 Main St.'},
  }
  
  const [sideBarVis, setSideBar] = useState(true);
  const [coords, setCoords] = useState([-123.23395, 49.249605]);
  const [farms, setFarms] = useState([]);

  let NClosest = 5;
  useEffect(() => {
    const fetchFarms = async () => {
      const result = await closestFarms({latitude: coords[1], longitude: coords[0], topN: NClosest});
      setFarms(result);
    };

    fetchFarms();
  }, [coords, NClosest]);

  let locations = mockFarms;

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
