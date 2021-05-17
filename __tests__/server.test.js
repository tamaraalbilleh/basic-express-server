'use strict';
// requirements // 
const server = require ('../src/server.js');
const supertest = require ('supertest');
const request = supertest (server.app); 

describe ('testing server functions and errors', ()=>{
  it ('should get the home page message', async ()=>{
    // arrange 
    let rout = '/';
    // act
    const response = await request.get (rout);
    // assert
    expect(response.status).toBe (200);
    expect (response.text).toEqual ('welcome to home page!');
  });
  it ('should throw error 500', async ()=>{
    // arrange 
    let rout = '/person';
    // act
    const response = await request.get (rout);
    // assert
    expect(response.status).toBe (500);
  });
  it ('should throw page not found error 404', async ()=>{
    // arrange 
    let rout = '/tama';
    // act
    const response = await request.get (rout);
    // assert
    expect (response.status).toBe(404);
  });
});
