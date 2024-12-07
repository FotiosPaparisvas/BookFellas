const test = require('ava');
const got = require('got');
const app = require('../index.js');
const http = require('http');

test.before(async (t) => {
  const server = http.createServer(app);
  await new Promise((resolve) => server.listen(0, resolve));
  const { port } = server.address();
  t.context.server = server;
  t.context.got = got.extend({ responseType: "json", prefixUrl: `http://localhost:8080`,method: "DELETE" });
});

test.after.always((t) => {
t.context.server.close();
});

//Happy path
ratingid = 333;
test("DELETE /rating /{id} Should return rating info and statusCode 200 ", async (t) => {
  const { body, statusCode } = await t.context.got(`rating/${ratingid}`);
  t.is(statusCode, 200);
});

//Unappy paths
invalid_id = "Eimai_ena_invalid_id"
test("DELETE /rating /{id} Should return 400 because of invalid id ", async (t) => {
  const { body, statusCode } = await t.context.got(`rating/${invalid_id}`, {
    throwHttpErrors: false,
  });

  t.is(statusCode, 400);
});
