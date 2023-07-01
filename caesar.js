function encryptLetter(letter, key) {
  let charCode = letter.charCodeAt(0);
  if (charCode > 64 && charCode <= 90) {
    charCode = (charCode - 65 + key + 26) % 26 + 65;
    return String.fromCharCode(charCode)
  }
  if (charCode > 96 && charCode <= 122) {
    charCode = (charCode - 96 + key + 26) % 26 + 96;
    return String.fromCharCode(charCode)
  }
  return letter
}
function decryptLetter(letter, key) {
  let charCode = letter.charCodeAt(0);
  if (charCode > 64 && charCode <= 90) {
    charCode = (charCode - 65 - key + 26) % 26 + 65;
    return String.fromCharCode(charCode)
  }
  if (charCode > 96 && charCode <= 122) {
    charCode = (charCode - 96 - key + 26) % 26 + 96;
    return String.fromCharCode(charCode)
  }
  return letter
}

function encrypt(text, key) {
  if (!key) return text;
  let encodedText = "";
  for (let i = 0; i < text.length; i++) {
    encodedText += encryptLetter(text.charAt(i), key);
  }
  return encodedText
}

function decrypt(text, key) {
  if (!key) return text;
  let decodedText = "";
  for (let i = 0; i < text.length; i++) {
    decodedText += decryptLetter(text.charAt(i), key);
  }
  return decodedText
}

module.exports = { encrypt, decrypt };