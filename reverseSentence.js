function reverseSentence(sentence) {
  return sentence.replace(/\s\s+/g, ' ').split(/[\s+]/g).reverse().join(' ');
}

reverseSentence('world hello');
reverseSentence('push commit git');
reverseSentence('npm  install  sudo');
reverseSentence('import    default   function  export');
