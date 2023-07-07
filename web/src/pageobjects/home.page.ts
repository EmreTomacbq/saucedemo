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
    /* 
    *
    *   Methods
    *
    * */
    public open () {
        return browser.url(`https://www.saucedemo.com/`)
    }
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
}

export default new HomePage();
