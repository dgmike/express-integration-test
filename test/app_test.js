const assert = require('assert');
const supertest = require('supertest');

suite('app', () => {
  test('must listening on some port', () => {
    assert(typeof server.address().port === 'number');
  });

  test('must access root path', (done) => {
    supertest(`http://localhost:${server.address().port}`)
      .get('/')
      .expect(200)
      .expect('Content-type', 'application/json; charset=utf-8')
      .expect((res) => {
        assert.equal(JSON.stringify(res.body), JSON.stringify({"_links":{"self":{"href":"/"}}}));
      })
      .end(done);
  });
});
