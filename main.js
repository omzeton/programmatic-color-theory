import { default as p5Class } from "p5";
import "./style.css";

import { formatHex } from "culori";

const p5 = new p5Class(() => {});

const width = window.innerWidth;
const height = window.innerHeight;

const bgColor = "#eee";

function adjustHue(val) {
  if (val < 0) val += Math.ceil(-val / 360) * 360;

  return val % 360;
}

function createScientificPalettes(baseColor) {
  const targetHueSteps = {
    analogous: [0, 30, 60],
    triadic: [0, 120, 240],
    tetradic: [0, 90, 180, 270],
    complementary: [0, 180],
    splitComplementary: [0, 150, 210],
  };

  const palettes = [];

  for (const type of Object.keys(targetHueSteps)) {
    palettes.push(
      targetHueSteps[type].map(step => ({
        l: baseColor.l,
        c: baseColor.c,
        h: adjustHue(baseColor.h + step),
        mode: "lch",
      }))
    );
  }

  palettes.push(
    [0, 100, 200, 300].map(step => ({
      l: baseColor.l,
      c: adjustHue(baseColor.c + step),
      h: baseColor.h,
      mode: "lch",
    }))
  );

  return palettes;
}

const baseColor = {
  l: 50,
  c: 100,
  h: 280,
  mode: "lch",
};

const palettes = createScientificPalettes(baseColor);

const rectSize = 120;
const spacing = rectSize + 5;

p5.setup = () => {
  p5.createCanvas(width, height);
  p5.background(bgColor);

  p5.noStroke();
  for (let y = 0; y < palettes.length; y++) {
    const stylePalette = palettes[y];
    for (let x = 0; x < stylePalette.length; x++) {
      const color = stylePalette[x];
      p5.fill(formatHex(color));
      p5.rect(20 + x * spacing, 20 + y * spacing, rectSize, rectSize);
    }
  }

  p5.fill(formatHex(baseColor));
  p5.rect(width - 140, 20, rectSize, rectSize);
};

p5.keyTyped = () => {
  if (p5.key === "s" || p5.key === "S") {
    p5.saveCanvas(new Date().toISOString(), "png");
  }
};
