const electron = require('electron');
const app = electron.app;

const browser = electron.BrowserWindow;

app.on('ready', function(){
	var mainWindow = new browser({width : 1024, height: 768, backgroundColor: '#ccc'});
	mainWindow.loadURL('file://' + __dirname + '/index.html');
});