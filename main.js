function findLyrics(artist, song){
    const result = fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`); //Fetch é uma promise interna. retorna promise
    return result;
}

const form = document.querySelector('#lyrics_form');
form.addEventListener('submit', el =>{
    el.preventDefault(); //cancelando comportamento default do form
    doSubmit();
})

async function doSubmit(){

    const lyrics_el = document.querySelector("#lyrics");
    const artist = document.querySelector('#artist');
    const song = document.querySelector("#song");

    lyrics_el.innerHTML = '<div class= "text-center spinner-grow" role="status><span class ="sr-only"> Carregando...</span></div>';

   const lyricsResponse = await findLyrics(artist.value, song.value);
   const data = await lyricsResponse.json();
   lyrics_el.innerHTML = data.lyrics;

}