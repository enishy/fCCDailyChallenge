function numberOfFiles(fileSize, fileUnit, driveSizeGb) {
  const rate = {
    B: 1,
    KB: 1000,
    MB: 1000000,
    GB: 1000000000,
  };
  return Math.floor((driveSizeGb * 1000000000) / (rate[fileUnit] * fileSize));
}

numberOfFiles(500, 'KB', 1);
numberOfFiles(50000, 'B', 1);
numberOfFiles(5, 'MB', 1);
numberOfFiles(4096, 'B', 1.5);
numberOfFiles(220.5, 'KB', 100);
numberOfFiles(4.5, 'MB', 750);
