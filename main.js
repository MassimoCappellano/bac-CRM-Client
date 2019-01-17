'use strict';

const {app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const url = require('url')

var mainWindow = null;

ipcMain.on('close-main-window', function () {
    app.quit();
});

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        frame: false,
        height: 800,
        resizable: false,
        width: 600
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'app', 'index.html'),
        protocol: 'file:',
        slashes: true
      }));
});
