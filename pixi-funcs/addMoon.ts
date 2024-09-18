import { Graphics } from 'pixi.js';
import moonSvg from './moon.svg';

const _Graphics: any = Graphics

export function addMoon(app: any) {
  // Create a moon graphics object from an SVG code.
  const graphics: any = new _Graphics().svg(moonSvg);

  // Position the moon.
  graphics.x = app.screen.width / 2 + 100;
  graphics.y = app.screen.height / 8;

  // Add the moon to the stage.
  app.stage.addChild(graphics);
}
