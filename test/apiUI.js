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
    browser.url('/'); 
    browser.maximizeWindow();
    //browser.setTimeout({'pageLoad': 120000, 'script': 120000});
    browser.pause(5000).then(function(text){
        text = response.status;
        homePage.searchText(text); 
        console.log("Parameter passed is "+text)      

    });
    browser.pause(200000);
    

});
});
