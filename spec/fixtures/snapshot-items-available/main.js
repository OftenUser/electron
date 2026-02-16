// Verifies that objects contained in custom snapshot are accessible in Electron.

const { app } = require('electron');

app.whenReady().then(() => {
  let returnCode = 0;
  try {
    const testValue = f(); // eslint-disable-line no-undef
    if (testValue === 86) {
      console.log('OK test snapshot successfully loaded.');
    } else {
      console.log('Not OK test snapshot could not be successfully loaded.');
      returnCode = 1;
    }
  } catch (ex) {
    console.log('Error running custom snapshot', ex);
    returnCode = 1;
  }
  setImmediate(function () {
    app.exit(returnCode);
  });
});

process.on('exit', function (code) {
  console.log('Test snapshot exited with code: ' + code);
});
