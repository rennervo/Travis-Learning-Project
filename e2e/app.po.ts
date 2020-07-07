import { browser, element, by } from 'protractor';

export class TodoAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getElementsCount(tag) {
    return element.all(by.tagName(tag)).count();
  }

  getPlaceholderFromElement(tag) {
    return element(by.tagName(tag)).getAttribute('placeholder');
  }
}
