import {Threebox} from 'threebox-plugin';
import * as THREE from 'three';

export const loadLocations = (map, farms) => {
  console.log('loading map');
  const mobilePantries = [];
  const barns = [];
  const shelterValues = Object.values(farms);
  for (let i = 0; i < shelterValues.length; i ++) {
    // if (shelterValues[i].type == 'mobile-pantry') {
    //   mobilePantries.push(shelterValues[i]);
    // }
    // if (shelterValues[i].type == 'homeless-shelter') {
    //   homelessShelters.push(shelterValues[i]);
    // }
    // if (shelterValues[i].type == 'donation-shelter') {
    //   donationCenters.push(shelterValues[i]);
    // }
    // if (shelterValues[i].type == 'food-bank') {
    //   foodBanks.push(shelterValues[i]);
    // }
    barns.push(farms[i]);
  }

  let barn;

  map.addLayer({
    id: 'barn-house',
    type: 'custom',
    renderingMode: '3d',
    onAdd: function (map, mbxContext) {

      window.tb = new Threebox(
        map,
        mbxContext,
        { defaultLights: true }
      );

      var options = {
        obj: 'barn/scene.gltf',
        type: 'gltf',
        scale: 40,
        units: 'meters',
        anchor: 'center',
        rotation: { x: 90, y: 180, z: 0 } //default rotation
      }
      var geometry = new THREE.BoxGeometry(30, 60, 120);
        let cube = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({ color: 0x660000 }));
        cube = window.tb.Object3D({ obj: cube, units: 'meters' });
        cube.setCoords([-123.23395, 49.249605, 0]);
        window.tb.add(cube);

    //   for (let i = 0; i < barns.length; i ++) {
    //     const barn = barns[i];
    //     console.log(barn);
    //     window.tb.loadObj(options, function (model) {
    //       barn = model.setCoords([barn.long, barn.lat]);
    //       window.tb.add(barn);
    //     //   addWater(map, [barn.long, barn.lat]);
    //     })
    //   }
    },
    render: function (gl, matrix) {
      window.tb.update();
    }
  });
}