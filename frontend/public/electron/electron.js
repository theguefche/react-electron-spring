// electron.js

const { app, BrowserWindow } = require('electron');
const shell = require('shelljs');
const { spawn } = require('child_process');
const axios = require('axios');
const path = require('path');
const url = require('url');

let mainWindow;
let loadingWindow;
let errorWindow;
let springBootProcess;
let backendURL = "http://127.0.0.1:8080";
let frontendReady = false;
let backendReady = false;
let timeoutAttempts = 0;
let checkServerInterval;


function createWindow() {

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  loadingWindow = new BrowserWindow({
    width: 400,
    height: 300,
    show: false,
    frame: false,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    }
  });

  loadingWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, './loading.html'),
      protocol: 'file:',
      slashes: true
    })
  );

  loadingWindow.once('ready-to-show', () => {
    loadingWindow.show();
  });

  springBootProcess = spawn(
    'java',
    ['-jar', path.join(__dirname, 'backend-0.0.1-SNAPSHOT.jar')],
  );

  springBootProcess.stdout.on('data', (data) => console.log(data.toString()));
  springBootProcess.stderr.on('data', (data) => { console.error(`Spring Boot Backend Error: ${data}`); });

  springBootProcess.on('error', (err) => {
    console.error('Spring Boot process error:', err);
    closeAPP();
  });


  const { net } = require('electron');
  const requestTOBack = net.request(backendURL);

  checkServerInterval = setInterval(() => {

    shell.echo("Checking...")

    requestTOBack.on('response', (response) => {
      shell.echo("backend ready !")
      backendReady = true;
    })

    if (backendReady == true 
      ) {
      shell.echo("Backend Ready !")
      clearInterval(checkServerInterval);

      mainWindow.loadURL(`file://${path.join(app.getAppPath(), 'build/index.html')}`);

      if (loadingWindow) {
        loadingWindow.close();
        loadingWindow = null;
      }

      mainWindow.show();
    }

    requestTOBack.on('error', (error) => {
      clearInterval(checkServerInterval);
      shell.echo("backend error")
      console.log(error);
      if (loadingWindow) {
        loadingWindow.close();
        loadingWindow = null;
      }
      showErrorWindow("backend error")
    });

    requestTOBack.end();

  }, 2500);
}

function showErrorWindow(errorMessage) {

  errorWindow = new BrowserWindow({
    width: 400,
    height: 300,
    autoHideMenuBar: true,
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  errorWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, './error.html'),
      protocol: 'file:',
      slashes: true,
      search: `?message=${encodeURIComponent(errorMessage)}`, // Pass the error message as a query parameter
    })
  );

  errorWindow.once('ready-to-show', () => {
    errorWindow.show();
  });

  errorWindow.on('close', () => {
    closeAPP();
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    closeAPP();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

async function closeAPP() {
  shell.echo("closing !")
  try {
    await axios.post(backendURL + "/shutdown");
    console.log('Spring Boot process terminated gracefully.');
  } catch (error) {
    console.error('Error terminating Spring Boot process:', error.message);
  }
  app.quit()
}