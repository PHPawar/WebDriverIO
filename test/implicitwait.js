const homePage = require("../pages/homePage")

describe ("Implicit Wait Test", function()
{
    it ("ImplicitWait Test", function(){
    browser.url('/'); 
    browser.maximizeWindow();
    var timeout = browser.getTimeouts();
    console.log("Before setting implicit wait"+timeout);
    //browser.setTimeout({'pageLoad': 10000, 'script': 10000});
    browser.setTimeout({ implicit: 40000, pageLoad: 50000, script: 120000});
    var timeout1 = browser.getTimeouts();
    console.log("After setting implicit wait"+timeout1);
    browser.pause(15000);
    homePage.searchText('apple mac book');
    })
})
