addEventListener("DOMContentLoaded", async function () {
  const urlparam = new URLSearchParams(this.window.location.search)
  const songID = urlparam.get('id')
  console.log(songID)

  const response = await this.fetch("http://localhost:3000/api/songs" + songID)
  const song = await response.json()
  console.log(song)

  let handling = ""
  heading =+ `Welcome to the ${song.title} page`
  document.querySelector("h1"). innerHTML = heading

  let html = ""
  html+= `
  <h2> Title = ${song.title} </h2>
  <h3> Artist = ${song.artist} </h3>
  <p>  Popularity= ${song.popularity} </p>
  <p> Release Date = ${song.releaseDate} </p>
  `

  document.querySelector("div").innerHTML = html
})

