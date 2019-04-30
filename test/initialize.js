const { app } = require('../app');

suiteSetup((done) => {
  global.server = app.listen(0);
  server.on('listening', () => {
    console.log(`Running server for test on http://0.0.0.0:${server.address().port}\n`);
    done();
  });
});

suiteTeardown((done) => {
  console.log('closing server');
  server.close();
  done();
});
