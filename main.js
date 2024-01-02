import { default as p5Class } from "p5";
import "./style.css";

const p5 = new p5Class(() => {});

const width = 1000;
const height = 1000;

const bgColor = "#000";

p5.setup = () => {
  p5.createCanvas(width, height);
  p5.background(bgColor);
};

p5.keyTyped = () => {
  if (p5.key === "s" || p5.key === "S") {
    p5.saveCanvas(new Date().toISOString(), "png");
  }
};
