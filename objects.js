var playlist = {Object};

function updatePlaylist(playList, artistName, songTitle){
 playList[artistName] = songTitle;
 return playList;
}

function removeFromPlaylist(playList, artistName){
 delete artistName.Object;
  return playlist;
}
