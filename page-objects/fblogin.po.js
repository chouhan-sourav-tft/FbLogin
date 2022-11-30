const { page } = require('../step-definitions/base');
// const { page} = require('playwright');
const fs = require ('fs');

exports.Login = class login {
    elements = {
        username: '#email',
        password: '#pass',
        loginButton: '[data-testid="royal_login_button"]',
        profileButton: '//*[@id="mount_0_0_MR"]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div/div[1]/div/div/div[1]/div/div/div[1]/ul/li/div/a/div[1]/div[2]/div/div/div/div/span/span'
    };

    async typeUserName() {
        await this.page.locator(this.elements.username).isVisible({ timeout: defaultTimeout });
        await this.page.fill(this.elements.username, 'souravchouhan132@gmail.com');
        await this.page.wait(10000);
    };
    async typePassword() {
        await this.page.locator(this.elements.password).isVisible({ timeout: defaultTimeout });
        await this.page.fill(this.elements.password, 'Sourav123@');
    };
    async clickLoginButton() {
        await this.page.click(this.elements.loginButton);
    };
    async clickProfileButton() {
        await this.page.click(this.elements.profileButton);
    };
} ;