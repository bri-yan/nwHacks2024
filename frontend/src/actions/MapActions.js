import { Threebox } from 'threebox-plugin';
import * as THREE from 'three';

export const loadLocations = async (map, farms) => {
  console.log('loading map');
  const barnHouses = Object.values(farms);

  const loadModel = (options) => {
    return new Promise((resolve, reject) => {
      window.tb.loadObj(options, (model) => {
        resolve(model);
      }, (error) => {
        reject(error);
      });
    });
  };

  map.addLayer({
    id: 'barn-house',
    type: 'custom',
    renderingMode: '3d',
    onAdd: async function (map, mbxContext) {
      window.tb = new Threebox(map, mbxContext, { defaultLights: true });

      var options = {
        obj: 'barn/scene.gltf',
        type: 'gltf',
        scale: 40,
        units: 'meters',
        anchor: 'center',
        rotation: { x: 90, y: 90, z: 0 } // default rotation
      };

      await Promise.all(barnHouses.map(async (barnHouse) => {
        try {
            console.log(barnHouse)
          const barn = await loadModel(options);
          barn.setCoords([barnHouse.long, barnHouse.lat]);
          window.tb.add(barn);
          console.log("hi");
        } catch (error) {
          console.error("Error loading model:", error);
        }
      }));
    },
    render: function (gl, matrix) {
      window.tb.update();
    }
  });
};
