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

test("DELETE /rating /{id} Should return 400 because of invalid id (string) ", async (t) => {
  invalid_id_string = "Eimai_ena_invalid_id"
  const error = await t.context.got(`rating/${invalid_id_string}`, {
    throwHttpErrors: false,
  });

  t.is(error.statusCode, 400);
});

test("DELETE /rating /{id} Should return 400 because of invalid id (float) ", async (t) => {
  invalid_id_float = 88.99 ;
  const error = await t.context.got(`rating/${invalid_id_float}`, {
    throwHttpErrors: false,
  });

  t.is(error.statusCode, 400);
});

test("DELETE /rating /{non_existent_id} Should return 404 Rating not found ", async (t) => {
  non_existent_id = 555;
  const error = await t.context.got(`rating/${non_existent_id}`, {
    throwHttpErrors: false,
  });

  t.is(error.statusCode, 404);
  t.is(error.body, 'Rating not found');
});