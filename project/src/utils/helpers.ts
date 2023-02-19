export const getRandomInt = (min: number, max: number): number => (
  Math.floor(Math.random() * (max - min)) + min
);

export const getRandomArrayElement = <T>(arr: T[]): T => arr[getRandomInt(0, arr.length)];

export const isTextLongEnough = (text: string, minLength: number, maxLength: number): boolean => {
  const textLength = text.trim().length;
  return textLength >= minLength && textLength <= maxLength;
};
