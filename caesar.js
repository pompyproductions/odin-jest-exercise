function encodeLetter(letter, key) {
  return letter
}

function encode(text, key) {
  if (!key) return text;
  let encodedText = "";
  // for (let i = 0; i < text.length; i++) {
  //   const charCode = text.charCodeAt(i);
  //   if (
  //     (charCode > 97 && charCode <= 122) ||
  //     (charCode> 224 && charCode <= 254)
  //     ) {
  //     return `${String.fromCharCode(firstLetterCode - 32)}${string.slice(1)}`
  //   encodedText += String.fromCharCode(text.charCodeAt(i) + key)
  // }
  return encodedText
}

function decode(text, key) {
  if (!key) return text;
  return text
}

module.exports = { encode, decode };