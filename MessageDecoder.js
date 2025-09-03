function decode(message, shift) {
  let result = '';

  for (let char of message) {
    if (/[a-z]/.test(char)) {
      let code = char.charCodeAt(0) - 97; // 'a' = 97
      let newCode = (code - shift) % 26;
      if (newCode < 0) newCode += 26;
      result += String.fromCharCode(newCode + 97);
    } else if (/[A-Z]/.test(char)) {
      let code = char.charCodeAt(0) - 65; // 'A' = 65
      let newCode = (code - shift) % 26;
      if (newCode < 0) newCode += 26;
      result += String.fromCharCode(newCode + 65);
    } else {
      result += char;
    }
  }

  return result;
}
decode('Xlmw mw e wigvix qiwweki.', 4);
decode('Byffi Qilfx!', 20);
decode('Zqd xnt njzx?', -1);
decode('oannLxmnLjvy', 9);
