/**
 * Rounding floating-point numbers
 * @param {number} value Number requiring rounding
 * @param {number} [afterDotNum=0] Number of decimal places
 * @returns {number} Rounded value
 */
export const round = (value: number, afterDotNum: number = 0): number => {
  if (afterDotNum > 0) {
    const sqrt: number = Math.pow(10, afterDotNum);

    return Math.round((value * sqrt)) / sqrt;
  }

  return Math.round(value);
};

/**
 * Rounding down
 * @param {number} value Number requiring rounding
 * @param {number} [afterDotNum=0] Number of decimal places
 * @returns {number} Rounded value
 */
export const floor = (value: number, afterDotNum: number = 0): number => {
  if (afterDotNum > 0) {
    const sqrt: number = Math.pow(10, afterDotNum);

    return Math.floor((value * sqrt)) / sqrt;
  }

  return Math.floor(value);
};

/**
 * Rounding up
 * @param {number} value Number requiring rounding
 * @param {number} [afterDotNum=0] Number of decimal places
 * @returns {number} Rounded value
 */
export const ceil = (value: number, afterDotNum: number = 0): number => {
  if (afterDotNum > 0) {
    const sqrt: number = Math.pow(10, afterDotNum);

    return Math.ceil((value * sqrt)) / sqrt;
  }

  return Math.ceil(value);
};

/**
 * Random number
 * @param {number} min Minimum number
 * @param {number} max Maximum number
 * @param {number} [noBorder=false] TRUE, to exclude min and max values from the result
 * @param {number} [afterDotNum=0] Number of decimal places, for example: [afterDotNum:2] => 10.26
 * @returns New random number
 */
export const random = (min: number, max: number, noBorder: boolean = false, afterDotNum: number = 0) => {
  const border: number = noBorder ? 1 / Math.pow(10, afterDotNum) : 0;

  min = min + border;
  max = max - border;

  return round(Math.random() * (max - min) + min, afterDotNum);
};

/**
 * Check if a number is within a specified range
 * @param value The number to check
 * @param max The maximum allowable value
 * @param min The minimum allowable value
 * @returns The adjusted value, constrained within the specified range
 */
export const clamp = (value: number, max = Infinity, min = 0) => Math.min(Math.max(value, min), max);