import React, { useState, useEffect } from 'react';
import MapComponent from '../components/Map';
import SidebarComponent from '../components/Sidebar';
import { loadLocations } from '../actions/MapActions';
import { closestFarms, calculateDistance } from '../components/ClosestFarmList';
import { firestore } from '../firebase/utils';
import { getDocs, collection } from 'firebase/firestore'; // Import getDocs from Firebase Firestore

const MapPage = (props) => {
  const mockFarms = {
    'UBC Farm Market': {long: -123.23799, lat: 49.25125, address: '1234 Main St.'},
    'Pacific Spirit Farm' : {long: -123.176588, lat: 49.224863, address: '2345 Main St.'},
  }
  
  const [sideBarVis, setSideBar] = useState(true);
  let [coords, setCoords] = useState([-123.23799, 49.25105]);
  const [farms, setFarms] = useState([]); // State to store the fetched farms

  useEffect(() => {
    const fetchFarms = async () => {
      try {
        const farmsData = await closestFarms({ latitude: coords[1], longitude: coords[0], topN: 5 });
        const updatedFarmsData = farmsData.reduce((acc, farm) => {
          const { name, coordinates, ...otherFields } = farm;
  
          // Check if coordinates is defined and has at least two elements
          if (coordinates && coordinates.length >= 2) {
            acc[name] = { ...otherFields, long: coordinates[1], lat: coordinates[0] };
          } else {
            // Handle the case where coordinates are not properly defined
            console.error(`Missing or invalid coordinates for farm: ${name}`);
          }
          
          return acc;
        }, {});
        setFarms(updatedFarmsData);
      } catch (error) {
        console.error("Failed to fetch farms:", error);
      }
    };
    fetchFarms();
  }, [coords]);
  let locations = farms;
  const [updateMap, setUpdateMap] = useState(true);

  const mapLoad = map => {
    setTimeout(() => {
      window.map = map;
      loadLocations(map, locations);
    }, 3000);
  };

  const toggleSideBar = (sideBarState) => {
    setSideBar(sideBarState);
  }

  const toggleCoords = (coordinates) => {
    setCoords(coordinates);
  }

  const toggleUpdateMap = () => {
    setUpdateMap(!updateMap);
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
  const rankings = Object.entries(farms).map(([name, details]) => [
    name,
    // details.description,
    'donation-shelter',
    details.address
  ]);
  
  let [mapCoords, setMapCoords] = useState([49.253467683431005, -123.25045471982578]);

  console.log(farms);
  // console.log(rankings);
  // console.log(farms[rankings[0][0]].long);
  
  // const mockFarms = {
  //   'UBC Farm Market': {long: -123.23595, lat: 49.249605, address: '1234 Main St.'},
  //   'Pacific Spirit Farm' : {long: -123.2095, lat: 49.245605, address: '2345 Main St.'},
  // }

  const mockRanking2 = ['donation-shelter'];
  return (
    <div className="mapbox">
      <MapComponent updateMap={updateMap} coords={coords} mapLoad={mapLoad} sideBarVis={sideBarVis} mapClick={() => {}} />
      <SidebarComponent toggleUpdateMap={toggleUpdateMap} toggleCoords={toggleCoords} shelters={farms} ranking={rankings} toggleSideBar={toggleSideBar} sideBarVis={sideBarVis}/>
      
    </div>
  );
}

export default MapPage;
