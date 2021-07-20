describe("interaction with web elements", function(){
it ("enter a value in the field", async function()
{
    browser.url ('/');
    browser.maximizeWindow();
    const search = await $(".//input[@id='twotabsearchtextbox']");
    browser.pause(5000);
    await search.setValue('apple mac book');
    const submit = await $(".//input[@id='nav-search-submit-button']");
    await submit.click();
    browser.pause(10000);
    
    
 
    
})



})