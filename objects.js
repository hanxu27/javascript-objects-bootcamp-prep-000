var playlist = { Beethoven: "Moonlight Sonata" }

function updatePlaylist(playlist, name, title){
  var playlist1 = Object.assign({}, playlist, { name: title})
  return playlist
}