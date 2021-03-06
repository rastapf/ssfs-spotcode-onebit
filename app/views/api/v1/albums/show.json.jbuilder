json.title @album.title
json.artist_name @album.artist.name
json.cover_url url_for(@album.cover)

json.songs @album.songs.each do |song|
    json.id song.id
    json.album_id song.album.id
    json.favorite current_user.is_favorite? 'Song', song.id
    json.title song.title
    json.file_url url_for(song.file)
end