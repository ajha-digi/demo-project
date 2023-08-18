export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitalizeWords(input) {
    const words = input.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = capitalizeFirstLetter(words[i]);
    }
    return words.join(' ');
  }
