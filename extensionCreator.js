function getExtension(filename) {
  if (/[.]/.test(filename)) {
    const extension = filename.split('.');
    if (extension[extension.length - 1] === '') return 'none';
    return extension[extension.length - 1];
  } else {
    return 'none';
  }
}

getExtension('document.txt');
getExtension('README');
getExtension('image.PNG');
getExtension('.gitignore');
getExtension('archive.tar.gz');
getExtension('final.draft.');
