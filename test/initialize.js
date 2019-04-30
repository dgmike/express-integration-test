const { app } = require('../app');

before((done) => {
  global.server = app.listen(0);
  server.on('listening', () => {
    console.log(`Running server for test on http://0.0.0.0:${server.address().port}`);
    done();
  });
});

after((done) => {
  console.log('closing server');
  server.close();
  done();
});
