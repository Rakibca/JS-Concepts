// forEach() does not return a new array, we cannot chain an array method onto it.
// map() returns a new array, therfore we can chain array methods.

import { playlistArr } from '/playlist.js';

const playlistHtml = playlistArr
  .map(function (track) {
    return `
    <section class="card">
        <div class="card-start">
            <img src="/images/${track.albumArt}">
        </div>
            <div class="card-mid">
                <h4 class="card-title">${track.title}</h4>
                <p class="card-artist">${track.artist}</p>
            </div>
        <div class="card-end">
            <p class="card-menu">...</p>
        </div>
    </section>
    `;
  })
  .join('');

document.getElementById('container').innerHTML = playlistHtml;
