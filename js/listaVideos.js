var videos = [
    {titulo: 'HALO Temporada 2 Tráiler 2 Español Latino (2024)', descripcion: 'HALO 2 Tráiler 2 Español Latino (2024)✔ Síguenos en Facebook ►/ 100558765517601🔥 Las películas que NO debes perderte están AQUÍ ► • 🔥 No se pierda éste vídeo✔ Síguenos en Instagram ►/ sensacine✔ Síguenos en Twitter ►/ sensacine', url: 'https://www.youtube.com/embed/AZ_rG5MrCAg?si=2g3f7gI6lzSguV6A'},
    {titulo: 'La Saga Skywalker I Star Wars: Galaxy Of Adventures', descripcion: '2,432,694 vistas  1 sept 2019 Había una vez un chico común que se convirtió en el jedi más grande de todos. Conoce el inicio de Luke Skywalker y su sable de luz Síguenos en Facebook: / disneyxdlatinoamerica Síguenos en Instagram: / disneyxdla Visita nuestra cuenta de Twitter: https://twitter.com/disneyxd_la?lang=esSitio Oficial de Disney XD: http://www.disneylatino.com/disneyxd/¡Haz click en "Suscribirse" para ser el primero en ver los nuevos videos de Disney XD!', url: 'https://www.youtube.com/embed/hvl9M-md_fE?si=ujgClM2yzVcVlSF9" title="YouTube video player'},
    {titulo: 'Kung Fu Panda 4 | Tráiler Oficial (Universal Pictures) - HD', descripcion: '1,731,166 vistas  2 nov 2023EL PLANETA DE LOS SIMOS: NUEVO REINO Tráiler Español Latino (2024)✔ Síguenos en Facebook ►/ 100558765517601🔥 Las películas que NO debes perderte están AQUÍ ► • 🔥 No se pierda éste vídeo ✔ Síguenos en Instagram ► / sensacine✔ Síguenos en Twitter ►/ sensacine© 2023 - 20Th Century Studio¡Te mantenemos al tanto de todo! Suscríbete ahora y disfruta de los tráilers de las películas más esperadas, así como el tráiler, Doblado (VE) y Subtitulado (VOSE), clip, vídeo y escena de la película en español que debes verde!', url: 'https://www.youtube.com/embed/kg3Q63gzF6I?si=vHvratChMlHCcjWN'},
    {titulo: 'GATO CON BOTAS 2: El Último Deseo Tráiler Español Latino 3 (Nuevo, 2022)', descripcion: 'Star wars 2 Tráiler 2 Español Latino (2024)✔ Síguenos en Facebook ►/ 100558765517601🔥 Las películas que NO debes perderte están AQUÍ ► • 🔥 No se pierda éste vídeo✔ Síguenos en Instagram ►/ sensacine✔ Síguenos en Twitter ►/ sensacine', url: 'https://www.youtube.com/embed/hxJyt1oDyOA?si=j_4CHaOAWXGLBKWL'},
    {titulo: 'Spider-Man: A Través del #SpiderVerso | Tráiler Oficial | Doblado', descripcion: 'Star wars 2 Tráiler 2 Español Latino (2024)✔ Síguenos en Facebook ►/ 100558765517601🔥 Las películas que NO debes perderte están AQUÍ ► • 🔥 No se pierda éste vídeo✔ Síguenos en Instagram ►/ sensacine✔ Síguenos en Twitter ►/ sensacine', url: 'https://www.youtube.com/embed/oBmazlyP220?si=hHXNHJJtkoGmIhaU'},
    {titulo: 'Anakin Skywalker | VADER', descripcion: 'Star wars 2 Tráiler 2 Español Latino (2024)✔ Síguenos en Facebook ►/ 100558765517601🔥 Las películas que NO debes perderte están AQUÍ ► • 🔥 No se pierda éste vídeo✔ Síguenos en Instagram ►/ sensacine✔ Síguenos en Twitter ►/ sensacine', url: 'https://www.youtube.com/embed/63EAJJakvEU?si=WXCCnUx8R_6qhfDX'},
    {titulo: 'Loki | The God of Stories', descripcion: 'Star wars 2 Tráiler 2 Español Latino (2024)✔ Síguenos en Facebook ►/ 100558765517601🔥 Las películas que NO debes perderte están AQUÍ ► • 🔥 No se pierda éste vídeo✔ Síguenos en Instagram ►/ sensacine✔ Síguenos en Twitter ►/ sensacine', url: 'https://www.youtube.com/embed/f5S5fdYqMOI?si=3XTgn2GfkRuNz6ya'}
];

var listaVideos = document.getElementById('listaVideosArreglo');
var descripcionVideo = document.getElementById('idDescripcionArreglos');
var iconoVideo = document.getElementById('idIconoArreglos');

mostrarListaVideos(videos);

function mostrarListaVideos(videosBuscados) {
    listaVideos.innerHTML = '';
    videosBuscados.forEach(indiceVideo => {
        var fila = document.createElement('div');
        fila.setAttribute('class', 'row');

        // Columna para el video
        var col1UrlVideo = document.createElement('div');
        col1UrlVideo.setAttribute('class', 'col-md-12 col-lg-6 mb-3'); // Utiliza 12 columnas en dispositivos pequeños y 6 en dispositivos grandes
        var iframeVideo = document.createElement('iframe');
        iframeVideo.setAttribute('src', indiceVideo.url);
        iframeVideo.setAttribute('width', '100%');
        iframeVideo.setAttribute('height', 'auto');
        iframeVideo.setAttribute('frameborder', '0');
        col1UrlVideo.appendChild(iframeVideo);
        fila.appendChild(col1UrlVideo);

        // Columna para el título y la descripción del video
        var col2TituloVideo = document.createElement('div');
        col2TituloVideo.setAttribute('class', 'col-md-12 col-lg-6 mb-3'); // Utiliza 12 columnas en dispositivos pequeños y 6 en dispositivos grandes
        var h4TituloVideo = document.createElement('h4');
        var h6DescripcionVideo = document.createElement('h6');
        h4TituloVideo.textContent = indiceVideo.titulo;
        h6DescripcionVideo.textContent = indiceVideo.descripcion;
        col2TituloVideo.appendChild(h4TituloVideo);
        col2TituloVideo.appendChild(h6DescripcionVideo);
        fila.appendChild(col2TituloVideo);

        listaVideos.appendChild(fila);
    });
}

function buscarVideos() {
    var textoVideo=document.getElementById('txtBuscar').value
    //alert('texto buscado' + textoVideo);
    var videosBuscados=videos.filter(
        indiceVideo =>{
            return indiceVideo.titulo.includes(textoVideo);
        }
    );
    mostrarListaVideos(videosBuscados);
}