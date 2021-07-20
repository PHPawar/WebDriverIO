const axios = require('axios');
class api {
async  getUserList(){
    const response = axios.get('https://reqres.in/api/users?page=3');
    return response

}
}

module.exports = new api();