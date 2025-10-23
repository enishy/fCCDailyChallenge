function favoriteSongs(playlist) {
  playlist.sort((a, b) => b.plays - a.plays);
  return [playlist[0].title, playlist[1].title];
}

favoriteSongs([
  { title: 'Sync or Swim', plays: 3 },
  { title: 'Byte Me', plays: 1 },
  { title: 'Earbud Blues', plays: 2 },
]);

favoriteSongs([
  { title: 'Skip Track', plays: 98 },
  { title: '99 Downloads', plays: 99 },
  { title: 'Clickwheel Love', plays: 100 },
]);

favoriteSongs([
  { title: 'Song A', plays: 42 },
  { title: 'Song B', plays: 99 },
  { title: 'Song C', plays: 75 },
]);
