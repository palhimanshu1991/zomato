import { HomePage } from './home.po';
import { LoginPage } from './login.po';
import { element, by, browser } from 'protractor';
import { RestaurantsListPage } from './restaurants.po';

describe('Home page test', () => {
  let homePage: HomePage;
  let page: LoginPage;
  let restaurantListPage: RestaurantsListPage;

  beforeEach(() => {
    homePage = new HomePage();
    page = new LoginPage();
    restaurantListPage = new RestaurantsListPage();
    page.navigateTo();
    page.fillCredentials();
  });

  it('load navbar and check navbar brandname ', () => {
    expect(homePage.getNavbarbrandText()).toEqual('InstaFoods');
  });

  it('load restaurants list on clicking button', () => {
    homePage.navigateToRestaurantPage();
    expect(restaurantListPage.getRestaurantsListHeading()).toContain(
      'Restaurants near you'
    );
  });
});
