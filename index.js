const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
];

function strip(bandName) {
  /*The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced. */

  /*The trim() method removes whitespace from both sides of a string.The trim() method does not change the original string.*/

  return bandName.replace(/^(a|the|an)/i, "").trim();
}
const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

document.querySelector("#bands").innerHTML = sortedBands
  .map((band) => `<li>${band}</li>`)
  .join("");

console.log(sortedBands);
