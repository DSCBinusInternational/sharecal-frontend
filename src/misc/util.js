import { words } from "./wordsList";

export function randArray(items) {
  return items[~~(items.length * Math.random())];
}

export function randWords(len) {
  let result = "";
  for (let i = 0; i < len; i++) {
    result += randArray(words).toUpperCase();
  }
  return result;
}