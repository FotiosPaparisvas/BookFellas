const test = require('ava');
const got = require('got');
const app = require('../index.js');
const http = require('http');

test.before(async (t) => {
  const server = http.createServer(app);
  await new Promise((resolve) => server.listen(0, resolve));
  const { port } = server.address();
  t.context.server = server;
  t.context.got = got.extend({ responseType: "json", prefixUrl: `http://localhost:8080`, method: "DELETE" });
});

test.after.always((t) => {
  t.context.server.close();
});

test("DELETE /book/{id} - Should return a book for a valid ID", async (t) => {
    const {body, statusCode} = await t.context.got("book/0");
    t.is(statusCode, 200, "Response status should be 200");
});
  
test("DELETE /book/{id} - Should return 400 error for invalid ID format (string)", async (t) => {
  const error = await t.throwsAsync(() => t.context.got("book/invalid")); 
  t.is(error.response.statusCode, 400);
  t.is(error.response.body.message, 'request.params.id should be integer');
});

test("DELETE /book/{id} - Should return 400 error for invalid ID format (float)", async (t) => {
  const error = await t.throwsAsync(() => t.context.got("book/1.5"));
  t.is(error.response.statusCode, 400);
  t.is(error.response.body.message, 'request.params.id should be integer');
});

test("DELETE /book/{id} - Should return 404 error for non-existent book ID", async (t) => {
  const error = await t.throwsAsync(() => t.context.got("book/999"));
  t.is(error.response.statusCode, 404);
  t.is(error.response.body, 'Book not found');
});