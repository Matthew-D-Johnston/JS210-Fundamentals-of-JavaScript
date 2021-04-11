"use strict";

function lightsOn(totalLights) {
  let lightPanel = constructLightPanel(totalLights);

  lightPanel = toggleLightSwitches(lightPanel, totalLights);

  return listOfLightsOn(lightPanel);
}

function toggleLightSwitches(lightPanel, rounds) {
  let startingIndex = 0;
  let multiple = 1;

  while (multiple <= rounds) {
    for (let index = startingIndex; index < rounds; index += multiple) {
      lightPanel[index] = !lightPanel[index];
    }

    startingIndex += 1;
    multiple += 1;
  }

  return lightPanel;
}

function constructLightPanel(totalLights) {
  let lightPanel = [];

  for (let index = 0; index < totalLights; index += 1) {
    lightPanel.push(false);
  }

  return lightPanel;
}

function listOfLightsOn(lightPanel) {
  return lightPanel.map((lightStatus, lightIndex) => {
    if (lightStatus) {
      return lightIndex + 1;
    } else {
      return lightStatus;
    }
  }).filter(lightNumber => lightNumber);
}

console.log(lightsOn(5));
console.log(lightsOn(6));
console.log(lightsOn(100));
console.log(lightsOn(2));
console.log(lightsOn(1));
console.log(lightsOn(0));
