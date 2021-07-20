const homePage = require("../pages/homePage")

describe ("open Link in New tab", function()
{
    it ("open link", function(){
    browser.url('/'); 
    browser.maximizeWindow();
    //browser.setTimeout({'pageLoad': 120000, 'script': 120000});
    browser.pause(5000);
    homePage.searchText('apple mac book');
    browser.pause(10000);
    homePage.clickSearch();    
    homePage.mobileClick();
    const url1 = browser.getUrl();
    browser.back();
    browser.newWindow(url1);
    browser.pause(10000);


    })
})
