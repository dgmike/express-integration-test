const supertest = require('supertest');

test('app have address', () => {
  const port = global.server.address().port;
  expect(server.address()).toEqual({ address: '0.0.0.0', family: 'IPv4', port });
});

test('check / route', () => {
  return supertest(`http://localhost:${server.address().port}`)
    .get('/')
    .expect(200)
    .expect((res) => {
      expect(res.body).toEqual({
        _links: {
          self: {
            href: '/',
          },
        },
      });
    });
});
