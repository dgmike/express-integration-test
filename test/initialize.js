const { app } = require('../app');

exports.mochaGlobalSetup = async () => new Promise((resolve, reject) => {
  global.server = app.listen(0);
  global.server.on('listening', () => {
    console.log(`Running server for test on http://0.0.0.0:${global.server.address().port}\n`);
    resolve();
  });
});

exports.mochaGlobalTeardown = async () => new Promise((resolve, reject) => {
  console.log('closing server');
  global.server.close();
  resolve();
});
