import { TodoAppPage } from './app.po';

describe('todo-app App', () => {
  let page: TodoAppPage;

  beforeEach(() => {
    page = new TodoAppPage();
  });

  it('page has only one element with tag "H1"', () => {
    page.navigateTo();
    expect(page.getElementsCount('h1')).toEqual(1);
  });

  it('input field has placeholder "What needs to be done?"', () => {
    page.navigateTo();
    page.getPlaceholderFromElement('input').then(function (placeholder) {
      expect(placeholder).toEqual('What needs to be done?');
    });
  });
});
