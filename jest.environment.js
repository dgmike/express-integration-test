const NodeEnvironment = require('jest-environment-node');
const { app } = require('./app');

class TestEnv extends NodeEnvironment {
  async setup() {
    return new Promise((resolve, reject) => {
      this.global.server = app.listen(0, '0.0.0.0');

      this.global.server.on('listening', () => {
        console.log(`Running server for test on http://0.0.0.0:${this.global.server.address().port}`);
        resolve();
      });
    });
  }

  teardown() {
    console.log('closing connection');
    this.global.server.close();
  }
}

module.exports = TestEnv;
