import { browser, by, element } from 'protractor';

export class LoginPage {
  private credentials = {
    email: 'brad1@gmail.com',
    password: '123456'
  };

  navigateTo() {
    return browser.get('/login');
  }

  fillCredentials(credentials: any = this.credentials) {
    element(by.css('[formControlName="email"]')).sendKeys(credentials.email);
    element(by.css('[formControlName="password"]')).sendKeys(credentials.password);
    element(by.css('.btn-primary')).click();
  }


}
