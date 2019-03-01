var playlist = { blah: "Moonlight Sonata" }

function updatePlaylist(playlist, name, title){
  playlist = Object.assign({}, playlist, { name: title})
  return playlist
}