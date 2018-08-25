import { RestaurantsListPage } from './restaurants.po';
import { LoginPage } from './login.po';
import { element, by } from 'protractor';

describe('Restaurants list test', () => {
  let restaurantsListpage: RestaurantsListPage;
  let loginPage: LoginPage;

  beforeEach(() => {
    restaurantsListpage = new RestaurantsListPage();
    loginPage = new LoginPage();
    loginPage.navigateTo();
    loginPage.fillCredentials();
  });

  it('load restaurant show page', () => {
    restaurantsListpage.navigateTo();
    expect(element(by.css('.btn-primary')).getText()).toEqual('View reviews');

  });
});
