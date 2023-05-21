export interface ContrastScores {
  AA: boolean;
  AALarge: boolean;
  AAA: boolean;
  AAALarge: boolean;
}

/**
 * @property {number}  hue
 * @property {number}  saturation
 * @property {number}  lightness
 */
export interface HslColor {
  hue: number;
  saturation: number;
  lightness: number;
}

/**
 * @property {number}  hue
 * @property {number}  saturation
 * @property {number}  lightness
 * @property {number}  alpha
 */
export interface HslaColor {
  hue: number;
  saturation: number;
  lightness: number;
  alpha: number;
}

/**
 * @property {number}  red
 * @property {number}  green
 * @property {number}  blue
 */
export interface RgbColor {
  red: number;
  green: number;
  blue: number;
}

/**
 * @property {number}  red
 * @property {number}  green
 * @property {number}  blue
 * @property {number}  alpha
 */
export interface RgbaColor {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}
