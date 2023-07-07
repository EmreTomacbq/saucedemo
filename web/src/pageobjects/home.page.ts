import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get headerCaption() {
        return $('.app_logo');
    }
    public get headerCartImg() {
        return $('.shopping_cart_link');
    }
    public get headerMenu() {
        return $('#react-burger-menu-btn');
    }
    public get homeCaption() {
        return $('.title');
    }
    public get homeFilterbar() {
        return $('.product_sort_container');
    }
    // Product
    public get productCaption() {
        return $('.inventory_list .inventory_item_name');
    }
    public get productDescription() {
        return $('.inventory_list .inventory_item_desc');
    }
    public get productPrice() {
        return $('.inventory_list .inventory_item_price');
    }
    public get productImg() {
        return $('.inventory_list .inventory_item_img');
    }
    public get addCartButton() {
        return $('.inventory_list button');
    }
    // Footer
    public get social() {
        return $('.social');
    }
    public get socialTwitter() {
        return $("a[href='https://twitter.com/saucelabs']");
    }
    public get socialFacebook() {
        return $("a[href='https://www.facebook.com/saucelabs']");
    }
    public get socialLinkedin() {
        return $("a[href='https://www.linkedin.com/company/sauce-labs/']");
    }

    /* 
    *
    *   Methods
    *
    * */
    async assertHomepage(){
        await browser.url('https://www.saucedemo.com/inventory.html')
        await expect(this.homeCaption).toBeExisting();
        await expect(this.homeCaption).toHaveTextContaining("Products");
        await expect(this.homeFilterbar).toBeExisting();
    }
    async assertHeader(){
        await expect(this.headerCaption).toBeExisting();
        await expect(this.headerCaption).toHaveTextContaining("Swag Labs");
        await expect(this.headerCartImg).toBeExisting();
        await this.headerCartImg.getAttribute("")
        //await expect(this.headerCartImg).toHaveAttrContaining("media", "./cart3x.3669d74a.svg");
        await expect(this.headerMenu).toBeExisting();
        //await expect(this.headerMenu).toHaveAttrContaining("media", "./menu3x.52cc17a3.svg");
    }
    async assertProduct(){
        await expect(this.productCaption).toBeExisting();
        await expect(this.productDescription).toBeExisting();
        await expect(this.productPrice).toBeExisting();
        await expect(this.productImg).toBeExisting();
        await expect(this.addCartButton).toBeExisting();
    }
    async assertFooter(){
        await this.clickTwitterLink();
        await this.clickFacebookLink();
        await this.clickLinkedinLink();

    }
    async clickTwitterLink() {
        await this.social.scrollIntoView();
        await this.socialTwitter.waitForDisplayed();
        await this.socialTwitter.click();
        await this.closeNewTab();
    }
      async clickFacebookLink() {
        await this.social.scrollIntoView();
        await this.socialFacebook.waitForDisplayed();
        await this.socialFacebook.click();
        await this.closeNewTab();
    }
      async clickLinkedinLink() {
        await this.social.scrollIntoView();
        await this.socialLinkedin.waitForDisplayed();
        await this.socialLinkedin.click();
        await this.closeNewTab();
    }
    public async closeNewTab(): Promise<void> {
        const handles = await browser.getWindowHandles();
        if (handles.length > 1) {
          await browser.switchToWindow(handles[1]);
          await browser.closeWindow();
          await browser.switchToWindow(handles[0]);
        }
      }

}

export default new HomePage();
