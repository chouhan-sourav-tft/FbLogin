var { Given, When, Then } = require('@cucumber/cucumber');
const { Login } = require('../page-objects/fblogin.po');

const loginobj = new Login();


Given('Sourav opens facebook page enter username', { timeout: 60 * 1000 }, async function () {
    await loginobj.typeUserName();
});

When('Sourav enters password', { timeout: 60 * 1000 }, async function() {
    await loginobj.typePassword();
});

When('click the login button', async function () {
    await loginobj.clickLoginButton();
});

Then('Sourav sees the facebook main page having notification button', async function () {
    await loginobj.clickProfileButton();
});