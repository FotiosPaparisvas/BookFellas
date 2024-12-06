import test from 'ava';
import got from 'got';
//import http from "node:http";
//import app from "../server.js";

const apiBaseUrl = 'https://bookfellas-as9j.onrender.com';

const likelistId = 99;
test('GET /likelist /{id}' , async t => {
    const getResponse = await got(`${apiBaseUrl}/likelist/${likelistId}`);

    t.is(getResponse.statusCode, 200);

});
