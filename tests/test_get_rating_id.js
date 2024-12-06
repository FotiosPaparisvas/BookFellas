import test from 'ava';
import got from 'got';
//import http from "node:http";
//import app from "../server.js";

const apiBaseUrl = 'https://bookfellas-as9j.onrender.com';

const ratingId = 188;
test('GET /rating /{id}', async t => {
    const {body, statusCode} = await got(`${apiBaseUrl}/rating/${ratingId}`);
    t.is(statusCode, 200);
  });