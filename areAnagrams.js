function areAnagrams(str1, str2) {
  str1 = str1.toLowerCase().replace(/\s+/g, '').split('').sort().join('');

  str2 = str2.toLowerCase().replace(/\s+/g, '').split('').sort().join('');

  return str1 === str2;
}
areAnagrams('listen', 'silent');
