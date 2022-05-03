const textArea = document.getElementById('text');
const btn = document.getElementById('permutation');
const result = document.getElementById('result');

const permutationText = str => {
  let newStr = str.toLowerCase();
  if (newStr.length <= 2) {
    return newStr.length === 2 ? [newStr, newStr[1] + newStr[0]] : [newStr];
  }
  
  return newStr
    .split('')
    .reduce(
      (accum, letter, i) =>
      accum.concat(permutationText(newStr.slice(0, i) + newStr.slice(i + 1)).map(value => letter + value)), []
    )
}

const getSortUniqueValues = str =>
  Array
    .from(new Set(permutationText(str)))
    .sort()
    .join(', ')

btn.addEventListener('click', () => {
  result.textContent = getSortUniqueValues(textArea.value.trim());
  textArea.value = '';
})