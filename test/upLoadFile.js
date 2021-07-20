const path = require('path');

describe('File upload test', function(){
    it ('Upload Test', function(){
        const chooseFile = $('#file-upload');
        const submit = $('#file-submit');
        const filePath = path.join(__dirname, '../data/test.jpg');
        const remoteFilePath = browser.uploadFile(filePath);
    
    
        browser.url('https://the-internet.herokuapp.com/upload');
        browser.maximizeWindow();
        chooseFile.setValue(remoteFilePath);
        submit.click();
        browser.pause(5000);
        const fileUpload = $(".//h3[text()='File Uploaded!']");
        assert.equal('File Uploaded!',fileUpload.getText());       

    })
})