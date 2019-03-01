var playlist = { Beethoven: "Moonlight Sonata" }

function updatePlaylist(playlist, name, title){
  playlist[name] = title
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.name
  return playlist
}