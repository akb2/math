/**
 * Rounding floating-point numbers
 * @param {number} value Number requiring rounding
 * @param {number} [precision=0] Number of decimal places
 * @returns {number} Rounded value
 */
export const round = (value: number, precision: number = 0): number => {
  if (precision > 0) {
    const sqrt: number = Math.pow(10, precision);

    return Math.round((value * sqrt)) / sqrt;
  }

  return Math.round(value);
};

/**
 * Rounding down
 * @param {number} value Number requiring rounding
 * @param {number} [precision=0] Number of decimal places
 * @returns {number} Rounded value
 */
export const floor = (value: number, precision: number = 0): number => {
  if (precision > 0) {
    const sqrt: number = Math.pow(10, precision);

    return Math.floor((value * sqrt)) / sqrt;
  }

  return Math.floor(value);
};

/**
 * Rounding up
 * @param {number} value Number requiring rounding
 * @param {number} [precision=0] Number of decimal places
 * @returns {number} Rounded value
 */
export const ceil = (value: number, precision: number = 0): number => {
  if (precision > 0) {
    const factor: number = Math.pow(10, precision);

    return Math.ceil((value * factor)) / factor;
  }

  return Math.ceil(value);
};

/**
 * Random number
 * @param {number} min Minimum number
 * @param {number} max Maximum number
 * @param {number} [noBorder=false] TRUE, to exclude min and max values from the result
 * @param {number} [precision=0] Number of decimal places, for example: [precision:2] => 10.26
 * @returns New random number
 */
export const random = (min: number, max: number, noBorder: boolean = false, precision: number = 0) => {
  const border: number = noBorder ? 1 / Math.pow(10, precision) : 0;

  min = min + border;
  max = max - border;

  return round(Math.random() * (max - min) + min, precision);
};

/**
 * Check if a number is within a specified range
 * @param value The number to check
 * @param max The maximum allowable value
 * @param min The minimum allowable value
 * @returns The adjusted value, constrained within the specified range
 */
export const clamp = (value: number, max = Infinity, min = 0) => Math.min(Math.max(value, min), max);