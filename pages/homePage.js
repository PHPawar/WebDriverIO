class homePage{
   get search() {return $(".//input[@id='twotabsearchtextbox']")}
   get submit() {return $(".//input[@id='nav-search-submit-button']")}
   get mobiles() {return $(".//div[@id ='nav-xshop']/a[text()='Mobiles']")}
   
   searchText(Text)
   {
   this.search.setValue(Text)
   }
   clickSearch()
   {
      this.submit.click()      
   }
   mobileClick()
   {
      this.mobiles.click()

   }
}

module.exports  = new homePage();