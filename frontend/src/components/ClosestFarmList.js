import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase/utils';
import { getDocs, collection } from 'firebase/firestore'; // Import getDocs from Firebase Firestore


export const ClosestFarmList = ({latitude, longitude, topN}) => {
  const [farms, setFarms] = useState([]);

  useEffect(() => {
    const fetchFarms = async () => {
      const snapshot = await getDocs(collection(firestore, 'farms'));
      const farmsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      const farmsWithDistance = farmsData.map(farm => ({
        ...farm,
        distance: calculateDistance(latitude, longitude, farm.coordinates[0], farm.coordinates[1])
      }));
      const sortedFarms = farmsWithDistance.sort((a, b) => a.distance - b.distance);
      setFarms(sortedFarms.slice(0, topN));
    };

    fetchFarms();
  }, [latitude, longitude, topN]);

  return (
    <ul>
      {farms.map(farm => (
        <li key={farm.id}>
          {farm.name} - {farm.distance.toFixed(2)} km
        </li>
      ))}
    </ul>
  );
};
  
// Function to calculate distance between two points
function calculateDistance(lat1, lon1, lat2, lon2) {
  console.log(lat1, lon1, lat2, lon2);
  // Haversine formula to calculate the great-circle distance between two points
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2-lat1);
  const dLon = deg2rad(lon2-lon1); 
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
  ; 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  const distance = R * c; // Distance in km
  console.log(distance);
  return distance;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
  
  export default ClosestFarmList;