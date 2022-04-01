const { NONAME } = require('dns');
const { app, BrowserWindow, ipcMain,Menu,ipcRenderer,webContents,} = require('electron');
const path = require('path')
const url = require('url')



if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit();
}

//关闭系统菜单
Menu.setApplicationMenu(null)
//成功打开页面
let mainWindow

const createWindow = () => {
  // Create the browser window.
  
   mainWindow = new BrowserWindow({
    width: 900,
    height: 700,
    minWidth:800,
    minHeight:600,
 //icon
 icon:path.join(__dirname,'./image/icon.ico'),
    webPreferences:{
      reload: path.join(__dirname, 'preload.js'),
      nodeIntegration:true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  });
  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
 mainWindow.webContents.openDevTools();

};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});


//接收消息->打开窗口
//没必要
/*let winAboutme
ipcMain.on('openaboutme',(event,arg)=>{
  winAboutme = new BrowserWindow({
    width:800,
    height:600,
    icon:path.join(__dirname,'./image/icon.ico'),
    webPreferences:{
      reload: path.join(__dirname, 'preload.js'),
      nodeIntegration:true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  })
  winAboutme.loadURL(path.join(__dirname, './html/about me.html'));
console.log('open-aboutme:finish');
winAboutme.on('close',()=>{winAboutme=null})
  mainWindow.webContent.send('open-aboutme-finish')
  console.log(arg);
})
*/

