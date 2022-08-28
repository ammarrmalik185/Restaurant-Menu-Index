import React from "react";
import Sketch from "react-p5";
import Mappa from "mappa-mundi"

let myMap;
let canvas;
const mappa = new Mappa('Leaflet');
const options = {
  lat: 0,
  lng: 0,
  zoom: 4,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

export default (props) => {
  const setup = (p5, canvasParentRef) => {
    console.log("ok")
    canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    myMap = mappa.tileMap(options);
    myMap.overlay(canvas)

  };

    const draw = (p5) => {
      p5.clear();
      const nigeria = myMap.latLngToPixel(11.396396, 5.076543);
      let eclipse = p5.ellipse(nigeria.x, nigeria.y, 20, 20);
      console.log(eclipse)
    }

  return <Sketch setup={setup} draw={draw} />;
};
