import { element, by, browser } from 'protractor';

export class Reviewspage {

  navigateTo() {
    browser.get('/restaurants/1/reviews');
  }

  getRating() {
    return element(by.css('p')).getText();
  }

}
