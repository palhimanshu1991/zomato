import { browser, by, element } from 'protractor';

export class HomePage {

  navigateTo() {
    return browser.get('/home');
  }

  getPageTitleText() {
    return element(by.css('h1')).getText();
  }

  getNavbarbrandText() {
    return element(by.css('.navbar-brand')).getText();
  }

  navigateToRestaurantPage() {
     element(by.css('.btn-danger')).click();
  }

}

