const { ipcRenderer } = require('electron');

// var closeEl = document.querySelector('.close');
// close-button
var closeEl = document.querySelector('#close-button');

closeEl.addEventListener('click', function () {
    ipcRenderer.send('close-main-window');
});

