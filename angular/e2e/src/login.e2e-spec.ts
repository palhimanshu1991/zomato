import { LoginPage } from './login.po';
import { HomePage } from './home.po';

describe('Login page test', () => {
  let page: LoginPage;
  let homePage: HomePage;

  beforeEach(() => {
    page = new LoginPage();
    homePage = new HomePage();
  });

  it('should redirect to home page when Login is successful', () => {
    page.navigateTo();
    page.fillCredentials();
    expect(homePage.getPageTitleText()).toEqual('InstaBhook');

  });
});
