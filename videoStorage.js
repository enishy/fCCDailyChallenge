function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
  const rate = {
    B: 1,
    KB: 1000,
    MB: 1000000,
    GB: 1000000000,
    TB: 1000000000000,
  };
  const ratedrive = {
    GB: 1000000000,
    TB: 1000000000000,
  };

  if (rate[videoUnit] == undefined) return 'Invalid video unit';
  if (ratedrive[driveUnit] == undefined) return 'Invalid drive unit';
  return Math.floor(
    (ratedrive[driveUnit] * driveSize) / (rate[videoUnit] * videoSize)
  );
}

numberOfVideos(500, 'MB', 100, 'GB');
numberOfVideos(2000, 'B', 1, 'TB');
numberOfVideos(2000, 'MB', 100000, 'MB');
numberOfVideos(500000, 'KB', 2, 'TB');
numberOfVideos(1.5, 'GB', 2.2, 'TB');
