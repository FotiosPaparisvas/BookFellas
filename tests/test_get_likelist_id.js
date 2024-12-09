const test = require('ava');
const got = require('got');
const app = require('../index.js');
const http = require('http');

test.before(async (t) => {
  const server = http.createServer(app);
  await new Promise((resolve) => server.listen(0, resolve));
  const { port } = server.address();
  t.context.server = server;
  t.context.got = got.extend({ responseType: "json", prefixUrl: `http://localhost:8080`});
});

test.after.always((t) => {
  t.context.server.close();
});

//Happy path
test("GET /likelist /{userid} Should return likelist info and statusCode 200", async (t) => {
  likelistid = 88; 
	const { body, statusCode } = await t.context.got(`likelist/${likelistid}`);
  t.is(statusCode, 200);
  //////
  //////
  //////na valw ta vivlia
  //////
  //////
});

//Unhappy paths

test("GET /likelist /{userid} Should return statusCode 400 because of invalid id (string) ", async (t) => {
  invalid_id_string = "Eimai_ena_invalid_id"
  const error = await t.context.got(`likelist/${invalid_id_string}`, {
    throwHttpErrors: false,
  });
  
  t.is(error.statusCode, 400);
});

test("GET /likelist /{userid} Should return statusCode 400 because of invalid id (float) ", async (t) => {
  invalid_id_float = 8.25;
  const error = await t.context.got(`likelist/${invalid_id_float}`, {
    throwHttpErrors: false,
  });
  
  t.is(error.statusCode, 400);
});

test("GET /likelist /{non_existent_userid} Should return 404 User not found ", async (t) => {
  non_existent_userid = 111;
  const error = await t.context.got(`likelist/${non_existent_userid}`, {
    throwHttpErrors: false,
  });
  
  t.is(error.statusCode, 404);
  t.is(error.body, 'User not found')
});