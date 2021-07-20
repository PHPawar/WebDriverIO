const axios = require('axios');
const { assert } = require('chai');
var stringify = require('json-stringify');
const homePage = require("../pages/homePage");

describe('Api Tests', async function(){
it ('Test Get call apli', async function(){
    const response = await axios.get('https://reqres.in/api/users?page=3');   
    console.log("Before Response ");
    var jsonresp = stringify(response);
    console.log(JSON.parse(jsonresp));
    //console.log("Response is -----"+ stringify(response));
    console.log("After Response ");
    console.log('status code is '+response.status);
    assert.equal('200',response.status);

})
it ('Api Delete call', async function(){

    var response = await axios.delete('https://reqres.in/api/users/2');   
    console.log("Before Response ");
    var jsonresp = stringify(response);
    console.log(JSON.parse(jsonresp));
    //console.log("Response is -----"+ stringify(response));
    console.log("After Response ");   
    console.log('status code is '+response.status); 
    assert.equal('204',response.status);

})
it ('Api Post call', async function(){

    let payload = { name: 'morpheus', job: 'leader' };
    var response = await axios.post('https://reqres.in/api/users', payload);   
    console.log("Before Response ");
    var jsonresp = stringify(response);
    const createId = response.data.id;
    console.log(JSON.parse(jsonresp));
    //console.log("Response is -----"+ stringify(response));
    console.log("After Response ");
    console.log('status code is '+response.status);    
    assert.equal('201',response.status);    
    assert.equal(createId,response.data.id);    
   

})
it ('Api put call', async function(){

    let payload = { name: 'morpheus', job: 'ion resident' };
    var response = await axios.put('https://reqres.in/api/users/2', payload);   
    console.log("Before Response ");
    var jsonresp = stringify(response);
    console.log(JSON.parse(jsonresp));
    //console.log("Response is -----"+ stringify(response));
    console.log("After Response ");
    console.log('status code is '+response.status);    
    assert.equal('200',response.status);
    assert.equal('ion resident',response.data.job);

})
})