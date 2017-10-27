module.exports = {
  'Alinta Energy - Coding Challenge: assert Title': function(browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body')
      .assert.title('Alinta Energy - Coding Challenge')
      .saveScreenshot('browser/screenshots/alinta-group-coding-challenge.png')
      .end();
  },

  'Alinta Energy - Coding Challenge: assert Actors Feed': function(browser) {
    browser.url('http://localhost:3000').waitForElementVisible('body');

    // Expected properties to be displayed in feed
    browser.expect.element('#actors').to.be.present;
  }
};
