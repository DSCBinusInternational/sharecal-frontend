import { words } from "./wordsList";

export function randArray(items) {
  return items[~~(items.length * Math.random())];
}

export function randWords(len) {
  let result = "";
  for (let i = 0; i < len; i++) {
    const word = randArray(words);
    result += word[0].toUpperCase() + word.substr(1);
  }
  return result;
}

export function findFirstDiffPos(a, b) {
  var i = 0;
  if (a === b) return -1;
  while (a[i] === b[i]) i++;
  return i;
}