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
            try {
                window.tb = new Threebox(map, mbxContext, { defaultLights: true });

                var options = {
                    obj: 'barn/scene.gltf',
                    type: 'gltf',
                    scale: 80,
                    units: 'meters',
                    anchor: 'center',
                    rotation: { x: 90, y: 90, z: 0 } // default rotation
                };

                // Load models concurrently using Promise.all
                const modelPromises = barnHouses.map(async (barnHouse) => {
                    try {
                        const barn = await loadModel(options);
                        barn.setCoords([barnHouse.long, barnHouse.lat]);
                        window.tb.add(barn);
                        console.log("Model added for coordinates:", [barnHouse.long, barnHouse.lat]);
                
                        // Check if the model was added successfully
                        const addedModel = window.tb.world.children.find(child => child.uuid === barn.uuid);
                        if (!addedModel) {
                            console.error("Failed to add model to Threebox:", barn);
                        } else {
                            console.log("Model added successfully:", addedModel);
                        }
                    } catch (error) {
                        console.error("Error loading model:", error);
                    }
                });

                // Wait for all models to be loaded before updating
                await Promise.all(modelPromises);
            } catch (error) {
                console.error("Error initializing Threebox:", error);
            }
        },
        render: function (gl, matrix) {
            // Rendering logic here (if any)
            // Remove the following line if not needed
            window.tb.update();
        }
    });
};
