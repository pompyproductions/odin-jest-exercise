const FOREIGN_LETTERS = {
  ş: "Ş",
  ı: "I"
}

function capitalize(string) {
  const firstLetterCode = string.charCodeAt(0);
  if (
    (firstLetterCode > 97 && firstLetterCode <= 122) ||
    (firstLetterCode > 224 && firstLetterCode <= 254)
    ) {
    return `${String.fromCharCode(firstLetterCode - 32)}${string.slice(1)}`
  }
  if (Object.hasOwn(FOREIGN_LETTERS, string.charAt(0))) {
    return `${FOREIGN_LETTERS[string.charAt(0)]}${string.slice(1)}`
  }
  return string
}

module.exports = capitalize;