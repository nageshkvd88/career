// checks if value is null/empty/just spaces
export const isEmpty = (value) =>
  value === undefined || value === null || value.toString().trim() === "";

// checks if input is only letters and spaces (basic names/universities)
export const isLettersOnly = (value) =>
  /^[a-zA-Z\s]*$/.test(value);

// checks if input is realistic for university names (letters, spaces, dots, hyphens, apostrophes)
export const isValiddotshyphens = (value) =>
  /^[a-zA-Z\s.-]*$/.test(value);

// only positive number (no decimals, no negatives)
export const isPositiveNumber = (value) =>
  /^\d+$/.test(value) && parseInt(value, 10) > 0;

// max length digits (default 5)
export const isMaxDigits = (value, max = 2) =>
  new RegExp(`^\\d{1,${max}}$`).test(value);

export const isValidNumber = (value, maxDigits = 5) => {
  const regex = new RegExp(`^\\d{0,${maxDigits}}$`);
  return regex.test(value);
};