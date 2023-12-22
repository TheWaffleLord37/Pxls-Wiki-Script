// ==UserScript==
// @name         Pixelate Map Images on Pxls Wiki
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Applies pixelated effect to the map images on Pxls Wiki
// @author       ChatGPT
// @icon         https://wiki.pxls.space/resources/assets/pxls-wiki-logo-mw-scaled.png
// @match        https://wiki.pxls.space/index.php?title=Map:*
// @match        https://wiki.pxls.space/view/Map:*
// @grant        none
// ==/UserScript==

(function() {
  var style = document.createElement('style');
  style.innerHTML = `
    .pixelated {
      image-rendering: -moz-crisp-edges;
      image-rendering: -o-crisp-edges;
      image-rendering: -webkit-optimize-contrast;
      -ms-interpolation-mode: nearest-neighbor;
      image-rendering: pixelated;
    }
  `;
  document.head.appendChild(style);

  var element = document.getElementById("map_leaflet_1");
  if (element) {
    element.classList.add("pixelated");
  }
})();
