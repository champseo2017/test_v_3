// ./page-objects/google-search.js


var assert=require('../runtime/world.js');

module.exports = {

    url: 'https://spabooking.aware.solutions/',

    elements: {
        search_el: by.css('div.search-option > input.search-filter'),
        text_el: by.css('div[class="detail-left"] h3[title="TEST_FTL_SPA_STE3"]')
    },

    /**
     * enters a search term into Google's search box and presses enter
     * @param {string} searchQuery
     * @returns {Promise} a promise to enter the search values
     */
    click_spa: function (linkTitle) {
        return driver.findElement(by.css('.search-option')).click().then(function(linkTitle) {
        return driver.sleep(9500);
    });
  },
    sendkey_spa: function (searchQuery) {
      var selector = page.spaObj.elements.search_el;
      return driver.findElement(selector).sendKeys(searchQuery, selenium.Key.ENTER).then(function() {

      return driver.sleep(9500);
  });
},
    click_button_serch: function () {
    return driver.findElement(by.css('a[href="/search"]')).click().then(function() {
    return driver.sleep(9500);
    });
  },
//   get_text_spa: function (expectedTitle) {
//     return driver.findElement({ css: '.container' }).getText().then(function(pageTitle) {
//         expect(pageTitle).to.contain(expectedTitle);
//     console.log(pageTitle);
//     });
// }



};
