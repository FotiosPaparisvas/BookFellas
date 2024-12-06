import test from 'ava';
import got from 'got';
//import http from "node:http";
//import app from "../server.js";

const apiBaseUrl = 'https://bookfellas-as9j.onrender.com';

const ratingId = 188;
test('GET /rating /{id} Happy path', async t => {
    const getResponse = await got(`${apiBaseUrl}/rating/${ratingId}`);

    t.is(getResponse.statusCode, 200);
  });