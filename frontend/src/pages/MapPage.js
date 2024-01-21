import React, { useState, useEffect } from 'react';
import MapComponent from '../components/Map';
import SideBar from '../components/SideBar';

const MapPage = (props) => {
  const [sideBarVis, setSideBar] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalTwoVisible, setIsModalTwoVisible] = useState(false);

  const toggleSideBar = (sideBarState) => {
    setSideBar(sideBarState);
  }

  return (
    <div className="mapbox">
      
      <SideBar toggleSideBar={toggleSideBar} sideBarVis={sideBarVis} toggleThankYouModal={() => {setIsModalTwoVisible(true)}}/>
      <MapComponent sideBarVis={true} mapClick={() => {}} mapLoad={() => {}} />
    </div>
  );
}

export default MapPage;
