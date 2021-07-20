const homePage = require("../pages/homePage")

describe ("Implicit Wait Test", function()
{
    it ("ImplicitWait Test", function(){
    browser.url('/'); 
    browser.maximizeWindow();   
    browser.waitUntil(function(){
        return homePage.search.isDisplayed() ===false
    }, 6000, 'search text wait')
    homePage.searchText('apple mac book');
    browser.pause(5000);
    })
})