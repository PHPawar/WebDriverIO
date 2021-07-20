const axios = require('axios');
var stringify = require('json-stringify');

describe('Api Delete call', async function(){

it ('Api Delete call', async function(){

    var response = await axios.delete('https://reqres.in/api/users/2');   
    console.log("Before Response ");
    var jsonresp = stringify(response);
    console.log(JSON.parse(jsonresp));
    //console.log("Response is -----"+ stringify(response));
    console.log("After Response ");  
    assert.equal('File Uploaded!',fileUpload.getText())  

});
});