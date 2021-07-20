const api = require('../pages/api');

describe("Get call",  function(){
      it ("Get Call Test", async function()
    {
      const getUserList1 = await api.getUserList();
        console.log("response is ---"+getUserList1);
      
      

    });   

})
