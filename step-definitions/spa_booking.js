module.exports = function () {
    this.Given(/^spa TEST_FTL_SPA_STE3 ready booking$/, function () {
      // load google
    return helpers.loadPage(page.spaObj.url);
    });

    this.When(/^I Click "([^"]*)"$/, function (linkTitle) {
          return page.spaObj.click_spa(linkTitle);
      });

      this.When(/^Send key "([^"]*)"$/, function (searchQuery) {
            return page.spaObj.sendkey_spa(searchQuery);
      });

      this.When(/^Click serch "([^"]*)"$/, function (searchQuery) {
            return page.spaObj.click_button_serch();
      });

    //
    //   this.When(/^I should see spa title "([^"]*)"$/, function (expectedTitle) {
    //
    //   return page.spaObj.get_text_spa(expectedTitle);
    //
    //
    // });

    this.When(/^clearCookies$/, function () {
      return helpers.loadPage('https://spabooking.aware.solutions/').then(function(clear) {
      return this.helpers.clearCookies(clear).then(function(clear){
      return console.log('Clear Cookies Success');
      });
  });
    });

};
