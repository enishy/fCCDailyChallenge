function numberOfPhotos(photoSizeMb, hardDriveSizeGb) {
  return Math.floor((hardDriveSizeGb * 1000) / photoSizeMb);
}

numberOfPhotos(1, 1);
numberOfPhotos(2, 1);
numberOfPhotos(4, 256);
numberOfPhotos(3.5, 750);
numberOfPhotos(3.5, 5.5);
