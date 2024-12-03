const test = require('ava');
const got = require('got');
const app = require('../index.js');
const http = require('http');

test.before(async (t) => {
  const server = http.createServer(app);
  await new Promise((resolve) => server.listen(0, resolve));
  const { port } = server.address();
  t.context.server = server;
  t.context.got = got.extend({ responseType: "json", prefixUrl: `http://localhost:${port}` });
});

test.after.always((t) => {
  t.context.server.close();
});

// Test for valid book ID
test("GET /book/{id} - Successful retrieval of a book", async (t) => {
  const { body, statusCode } = await t.context.got("book/0");

  t.is(statusCode, 200, "Response status should be 200");
  t.is(body.id, 0, "Book ID should match the requested ID");
  t.is(body.title, "title", "Book title should be correct");
  t.is(body.author, "author", "Book author should be correct");
  t.is(body.isbn, "isbn", "Book ISBN should be correct");
  t.is(body.publishedDate, "2000-01-23", "Book published date should be correct");
});

// // Test for invalid book ID
// test("GET /book/{id} - Invalid book ID returns 404", async (t) => {
//   const { body, statusCode } = await t.context.got("book/9999", {
//     throwHttpErrors: false,
//   });

//   t.is(statusCode, 404, "Response status should be 404 for invalid ID");
//   t.truthy(body, "Response body should not be empty");
// });

// // Test for malformed request
// test("GET /book/{id} - Malformed ID returns 400 or 404", async (t) => {
//   const { body, statusCode } = await t.context.got("book/invalid-id", {
//     throwHttpErrors: false,
//   });

//   t.true(
//     statusCode === 400 || statusCode === 404,
//     "Response status should be 400 or 404 for malformed ID"
//   );
//   t.truthy(body, "Response body should not be empty");
// });





