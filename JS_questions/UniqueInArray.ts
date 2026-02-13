const names : string[] = ['Ravi','Ranjan', 'Ramu', 'Agarwal'];

function uniqueChar(names: string[]): string {
  if (!names.length) return "";

  // Pre-convert all names to lowercase
  const lower = names.map(n => n.toLowerCase());

  // Take characters from the first name only
  const first = lower[0];
  let result = "";

  for (const ch of first) {
    let existsInAll = true;

    // Check if every other name contains this character
    for (let i = 1; i < lower.length; i++) {
      if (!lower[i].includes(ch)) {
        existsInAll = false;
        break;
      }
    }

    if (existsInAll) result += ch;
  }

  return result;
}


console.log(uniqueChar(names)) // ra



// --------------------------------------------------------

function getCommonChars(words:string[]) {
  if (!words.length) return '';

  // Convert each word into a set of characters
  const sets = words.map(word => new Set(word));

  // Reduce all sets to their intersection
  const commonChars = sets.reduce((acc, curr) => {
    return new Set([...acc].filter(ch => curr.has(ch)));
  });

  // Return characters in order of first word, unique only
  return [...words[0]]
    .filter((ch, i, arr) => arr.indexOf(ch) === i && commonChars.has(ch))
    .join('');
}
