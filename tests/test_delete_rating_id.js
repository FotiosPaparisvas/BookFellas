import test from 'ava';
import got from 'got';
//import http from "node:http";
//import app from "../server.js";

const apiBaseUrl = 'https://bookfellas-as9j.onrender.com';


test('DELETE /rating/{id}', async t => {
  const ratingId = 188; // Use an actual rating ID that exists

  const deleteResponse = await got.delete(`${apiBaseUrl}/rating/${ratingId}` );

  t.is(deleteResponse.statusCode, 200);//OXI 204????????

  //t.deepEqual(deleteResponse.body, { message: "Rating deleted successfully" }, 'Response body should confirm deletion');

});




