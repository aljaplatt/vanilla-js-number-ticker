const countEl = document.querySelector(".count-el");
const saveEl = document.querySelector(".save-el");

console.log(countEl);
console.log(saveEl);
// // h2.innerText = 5 + 6;

// // let value = h2.innerText;

// const batch = 5;
// let secondBatch = 41;

// // batch = 6; nope - assignment to constant

// // let count = batch + secondBatch;

// initialise count as 0
// listen for clicks on the increment btn
// increment the count variable when btn is clicked
// change the count in html to reflect the new count

let count = 0;

const increment = () => {
  //   console.log("clicked");
  count += 1;
  countEl.innerText = count;
  //   console.log(count);
};

const save = () => {
  console.log(count);
  let countStr = ` ${count} - `;
  saveEl.textContent += countStr;
  console.log(count);
  countEl.innerText = 0;
  count = 0;
};

// save();

// textContent vs innerText

/**
 * innerText returns all the elements - innerText only shows human readable elements, not hidden elements
 * reflows expensive - innerText
 * textContent is better
 */
