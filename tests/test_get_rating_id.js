const test = require('ava');
const got = require('got');
const app = require('../index.js');
const http = require('http');

test.before(async (t) => {
    const server = http.createServer(app);
    await new Promise((resolve) => server.listen(0, resolve));
    const { port } = server.address();///////////////////////////////////////////////
    t.context.server = server;
    t.context.got = got.extend({ responseType: "json", prefixUrl: `http://localhost:8080`});
});

test.after.always((t) => {
  t.context.server.close();
});

//Happy path
test("GET /rating /{id} Should return rating info and statusCode 200 ", async (t) => {
  ratingid = 777;
  const { body, statusCode } = await t.context.got(`rating/${ratingid}`);
  t.is(statusCode, 200);
  t.is(body.id, ratingid);//Άλλαξα το id στο ratingService για να επιστρέφει το δωσμένο id
  t.is(body.createdAt, "createdAt" );
  t.is(body.raterID, 123456);
  t.is(body.rating, 1);
  t.is(body.comment, "comment");
  t.is(body.userId, 654321);
});

//Unappy paths

test("GET /rating /{id} Should return 400 because of invalid id (string) ", async (t) => {
  invalid_id_string = "Eimai_ena_invalid_id"

   const error = await t.context.got(`rating/${invalid_id_string}`, {
    throwHttpErrors: false,
  });

  t.is(error.statusCode, 400);
});

test("GET /rating /{id} Should return 400 because of invalid id (float) ", async (t) => {
  invalid_id_float = 4.22;
  const error = await t.context.got(`rating/${invalid_id_float}`, {
        throwHttpErrors: false,
       });

  t.is(error.statusCode, 400);
});

test("GET /rating/{non_existent_id} Should return 404 Rating not Found", async (t) => {
  non_existent_id = 555;
  const error = await t.context.got(`rating/${non_existent_id}`, {
    throwHttpErrors: false,
    responseType: "json",
  });

  t.is(error.statusCode, 404);
  t.is(error.body, 'Rating not found');

});