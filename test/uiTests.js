const homePage = require("../pages/homePage");
const path = require('path');

describe ("open Link in New tab", function()
{
    it ("open link", function(){
    browser.url('/'); 
    browser.maximizeWindow();
    browser.setTimeout({ implicit: 40000, pageLoad: 50000, script: 120000});
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
   // browser.closeWindow()
    })

    it ("Explicit Test", function(){
         browser.url('/'); 
            browser.maximizeWindow();   
            browser.waitUntil(function(){
             return homePage.search.isDisplayed() ===true
             }, 6000, 'search text wait')
            homePage.searchText('apple mac book');
            browser.pause(5000);
           // browser.closeWindow()
        })



        it ('Upload Test', function(){     
        
            browser.url('https://the-internet.herokuapp.com/upload');
            const chooseFile = $('#file-upload');
            const submit = $('#file-submit');
            const filePath = path.join(__dirname, '../data/test.jpg');
            const remoteFilePath = browser.uploadFile(filePath);       
            browser.maximizeWindow();
            chooseFile.setValue(remoteFilePath);
            submit.click();
            browser.pause(5000);
            const fileUpload = $(".//h3[text()='File Uploaded!']");
            assert.equal('File Uploaded!',fileUpload.getText());       
    
        })
})
