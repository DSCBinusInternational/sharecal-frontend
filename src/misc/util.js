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