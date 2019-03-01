var playlist = { Beethoven: "Moonlight Sonata" }

function updatePlaylist(playlist, name, title){
  var playlist = Object.assign({}, playlist, { name: title})
  return playlist
}