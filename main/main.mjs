import { app, BrowserWindow, ipcMain, shell, protocol } from "electron";
import path from "path";
import { fileURLToPath } from "url";
import updater from "electron-updater";
const { autoUpdater } = updater;
import { exec } from "child_process";

app.commandLine.appendSwitch("disable-features", "BlockThirdPartyCookies,ThirdPartyStoragePartitioning");
// Opcional: garantir Storage Access API
app.commandLine.appendSwitch("enable-features", "StorageAccessAPI");

// Definir __dirname manualmente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createWindow = () => {
  const win = new BrowserWindow({
    width: 3840,
    height: 2160,
    fullscreen: true,
    webPreferences: {
      webviewTag: true,
      // importante:
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, "preload.js"),
      // sandbox: false  // (opcional, deixe false se estiver usando contextBridge)
    },
  });

  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });

  if (app.isPackaged) {
    win.loadURL("app://./index.html");
  } else {
    win.loadURL("http://localhost:3000");
    //win.webContents.openDevTools();
    win.webContents.on("did-fail-load", (e, code, desc) => {
      win.webContents.reloadIgnoringCache();
    });
  }


};

app.on("ready", () => {
  if (app.isPackaged) {
    // Register a custom protocol handler for 'app://'
    protocol.registerFileProtocol("app", (request, callback) => {
      const url = request.url.slice("app://".length);
      let filePath = path.join(app.getAppPath(), "out", url);

      // On Windows, file paths with backslashes can be problematic for URLs.
      // We normalize it to be safe.
      filePath = path.normalize(filePath);

      console.log(`Serving file: ${filePath}`); // Helpful for debugging
      callback({ path: filePath });
    });
  }

  createWindow();
  autoUpdater.checkForUpdatesAndNotify();

  setInterval(() => {
    autoUpdater.checkForUpdatesAndNotify();
  }, 1 * 60 * 1000); // 1 minuto

  autoUpdater.on("update-downloaded", () => {
    autoUpdater.quitAndInstall();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.on("open-keyboard", () => {
  exec("osk",
    (err) => {
      if (err) {
        console.error("Erro ao abrir TabTip:", err);
      }
    }
  );
});

ipcMain.handle("get-app-version", () => {
  console.log("Main process received get-app-version request.");
  return app.getVersion();
});

ipcMain.on("close-keyboard", () => {
  exec("taskkill /IM osk.exe /F",
    (err) => {
      if (err) {
        console.error("Erro ao fechar TabTip:", err);
      }
    }
  );
});