'use strict';
// requirements // 
const server = require ('../src/server.js');
const supertest = require ('supertest');
const request = supertest (server.app); 

describe ('test query for name',()=>{

  it ('should have no name in request query', async ()=>{
    // arrange 
    let rout = '/person';
    // act
    const response = await request.get (rout);
    // assert
    expect(response.status).toBe (500);
  });

  it ('should have name in request query', async ()=>{
    // arrange 
    let query = 'Tamara';
    // act
    const response = await request.get (`/person?name=${query}`);
    // assert
    expect(response.status).toBe (200);
    expect (response.body).toEqual ({ name : 'Tamara'});
  });
});