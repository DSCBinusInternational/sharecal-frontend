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

function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

// Thanks to: https://stackoverflow.com/a/34749873/12709867
export function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}