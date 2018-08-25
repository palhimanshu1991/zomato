import { browser, by, element } from 'protractor';

export class RestaurantsListPage {


  getRestaurantsListHeading() {
    return element(by.css('h6')).getText();
  }

  navigateTo() {
    return browser.get('/restaurants/1');
  }

  getReviews() {
    element(by.css('.btn-primary')).click();
  }



}
