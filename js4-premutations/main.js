const textArea = document.getElementById('text'),
btn = document.getElementById('permutation'),
result = document.getElementById('result');

const permutationText = str => {
  let string = str.toLowerCase();
  if(string.length <=2) return string.length === 2
                              ?[string, string[1]+string[0]]
                              :[string];
  return string
    .split('')
    .reduce(
      (accum, letter, i) => 
        accum.concat(permutationText(string.slice(0,i)+string.slice(i+1)).map(value => letter + value)), []
    )
}

const getSortUniqueValues = str => {
  return Array.from(
    new Set(permutationText(str)))
      .sort()
      .join(', ')
}

btn.addEventListener('click', () => {
  const textValue = textArea.value.trim();
  result.textContent = getSortUniqueValues(textValue);
})