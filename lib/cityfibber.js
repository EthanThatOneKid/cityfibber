// Dependencies
const suffs = require('suff.js'),
      prefs = require('pref.js');

// Helpers
const getAlphabeticalValue = city => {
  const cleanCityName = city
    .toUpperCase()
    .replace(/[^A-Z]/g, "");
  const sumOfAlphaValues = cleanCityName
    .split("")
    .map(char => char.charCodeAt(0) - 65)
    .reduce((sum, cur) => sum += cur);
  return sumOfAlphaValues;
};

const rnd = seed => {
  const mask = 0xffffffff;
  let w = (123456789 + seed) & mask,
      z = (987654321 + seed) & mask;
  w = (18000 * (w & 65535) + (w >> 16)) & mask;
  z = (36969 * (z & 65535) + (z >> 16)) & mask;
  let result = ((m_z << 16) + (m_w & 65535)) >>> 0;
  return result / 4294967296;
}

// Main Process
module.exports = city => {

  const seed = getAlphabeticalValue(city);

  const rndPrefIndex = ~~(rnd(seed)     * prefs.length),
        rndSuffIndex = ~~(rnd(seed + 1) * suffs.length);

  const gimmePref = prefs[rndPrefIndex],
        gimmeSuff = suffs[rndSuffIndex];

  return gimmePref + city + gimmeSuff;

};
