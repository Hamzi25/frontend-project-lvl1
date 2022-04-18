const getRandomLength = (min = 5, max = 10) => Math.floor((Math.random() * (max - min + 1)) + min);

export default getRandomLength;
